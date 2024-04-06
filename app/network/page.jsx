'use client'
import React, { useState } from 'react'

import CreatePostModal from '@/components/CreatePostModal'
import NetworkCards from '@/components/NetworkCards'


const NetWorkpage = () => {
  const [imgUrls, setImgUrls] = useState('')
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [createModal, setCreateModal] = useState(false)
  const [loading, setLoading] = useState(false)
  return (
    <div className='flex flex-col p-5 gap-16  '>
      {createModal && <CreatePostModal setLoading={setLoading} imgUrls={imgUrls} setImgUrls={setImgUrls} title={title} setTitle={setTitle} desc={desc} setDesc={setDesc} setCreateModal={setCreateModal} />}
      <div className=' flex flex-col justify-center'>
        <NetworkCards setCreateModal={setCreateModal} loading={loading} />
      </div>
    </div>
  )
}

export default NetWorkpage