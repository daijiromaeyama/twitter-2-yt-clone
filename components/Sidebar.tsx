import React from 'react'
import {
  BellIcon,
  HashtagIcon,
  BookmarkIcon,
  DotsCircleHorizontalIcon,
  MailIcon,
  UserIcon,
  HomeIcon,
  CollectionIcon,
} from '@heroicons/react/outline'
import { SidebarRow } from './SidebarRow'

const Sidebar = () => {
  return (
    <div className='col-span-2 flex flex-col items-center px-4 md:items-start'>
      <img className='m-3 h-8 w-10' src='https://rebrand.ly/2vnab7q' alt='' />
      <SidebarRow Icon={HomeIcon} title='Home' />
      <SidebarRow Icon={HashtagIcon} title='Explore' />
      <SidebarRow Icon={BellIcon} title='Notifications' />
      <SidebarRow Icon={MailIcon} title='Messages' />
      <SidebarRow Icon={BookmarkIcon} title='Bookmarks' />
      <SidebarRow Icon={CollectionIcon} title='Lists' />
      <SidebarRow Icon={UserIcon} title='Sign In' />
      <SidebarRow Icon={DotsCircleHorizontalIcon} title='More' />
    </div>
  )
}

export default Sidebar
