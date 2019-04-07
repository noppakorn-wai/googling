import React, { useEffect, useState } from 'react'
import { css } from '@emotion/core'
import axios from 'axios'
import Link from 'next/link'
import { List, Progress } from 'www/components/antd'
import SearchUploadButton from './SearchUploadButton'

const SearchList = () => {
  const [loading, setLoading] = useState(true)
  const [searchList, setSearchList] = useState()
  const fetchSearchList = async () => {
    const { data: { collection = [] } = {} } = await axios.get('/api/searches')
    setLoading(true)
    setSearchList(collection)
    setLoading(false)
  }
  useEffect(() => {
    fetchSearchList()
  }, [])
  return (
    <List
      bordered
      css={css`
        .ant-list-header {
          height: 56px;
        }
        .ant-list-empty-text {
          padding-top: 32px;
        }
      `}
      loading={loading}
      dataSource={searchList}
      header={<SearchUploadButton onUploadComplete={fetchSearchList} />}
      renderItem={(item) => (
        <List.Item
          actions={[
            <Link href={`/searches/${item.id}`}>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a>View</a>
            </Link>,
          ]}
        >
          <List.Item.Meta title={item.fileName} description={item.createdAt} />
          <div
            css={css`
              min-width: 200px;
            `}
          >
            <Progress percent={Math.ceil(item.numberOfResults / item.numberOfKeywords) * 100} />
          </div>
        </List.Item>
      )}
    />
  )
}

export default SearchList
