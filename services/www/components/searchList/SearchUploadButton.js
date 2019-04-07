import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'
import { Button, Icon, Modal, Upload } from 'www/components/antd'
import axios from 'axios'

const parseCsvString = (str) =>
  Array.from(
    new Set(
      str
        .replace(/\r?\n/g, ',')
        .split(',')
        .filter((val) => !!val)
        .sort(),
    ),
  )

const readFileContent = (file) =>
  new Promise((resolve, reject) => {
    const fileReader = new FileReader()
    fileReader.onload = (event) => resolve(event.target.result)
    fileReader.onerror = (error) => reject(error)
    fileReader.readAsText(file)
  })

const SearchUploadButton = ({ onUploadComplete }) => {
  const handleUpload = async (file) => {
    const fileName = file.name
    try {
      const keywords = parseCsvString(await readFileContent(file))
      if (keywords.length === 0) {
        Modal.error({
          title: 'This file contain no keyword',
          content: 'Please recheck your file again',
        })
      }
      if (keywords.length > 100) {
        Modal.error({
          title: 'Number of keywords in file is exceed 100',
          content: 'Please remove some of keywords before try uploading again',
        })
      }
      Modal.confirm({
        title: (
          <>
            Do you want to create new search with <strong>{keywords.length}</strong> new keywords?
          </>
        ),
        content: (
          <ul
            css={css`
              max-height: 50vh;
              overflow-y: scroll;
            `}
          >
            {keywords.map((keyword) => (
              <li key={keyword}>{keyword}</li>
            ))}
          </ul>
        ),
        onOk: async () => {
          await axios.post('/api/searches', {
            fileName,
            keywords,
          })
          onUploadComplete()
        },
      })
    } catch (e) {
      Modal.error({
        title: 'Can not read file content',
        content: 'Please try again',
      })
    }
    return false
  }
  return (
    <Upload
      css={css`
        float: right;
      `}
      showUploadList={false}
      accept=".csv"
      beforeUpload={handleUpload}
    >
      <Button type="primary">
        <Icon type="upload" />
        upload new keywords
      </Button>
    </Upload>
  )
}

SearchUploadButton.propTypes = {
  onUploadComplete: PropTypes.func,
}

SearchUploadButton.defaultProps = {
  onUploadComplete: () => {},
}

export default SearchUploadButton
