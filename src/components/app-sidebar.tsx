import * as React from 'react'
import { HomeIcon, LayoutGridIcon, BoxIcon, SettingsIcon, InfoIcon } from 'lucide-react'
import { NavMain } from '@/components/nav-main'
import { NavUser } from '@/components/nav-user'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar'

const data = {
  user: {
    name: 'Admin',
    email: 'admin@example.com',
    avatar: '',
  },
  navMain: [
    {
      title: '首页',
      url: '/',
      icon: <HomeIcon />,
    },
    {
      title: '功能1',
      url: '/feature1',
      icon: <LayoutGridIcon />,
    },
    {
      title: '功能2',
      url: '/feature2',
      icon: <BoxIcon />,
    },
    {
      title: '功能3',
      url: '/feature3',
      icon: <SettingsIcon />,
    },
    {
      title: '关于',
      url: '/about',
      icon: <InfoIcon />,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div className="flex items-center gap-2 px-4 py-2">
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <BoxIcon className="size-4" />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">My App</span>
            <span className="truncate text-xs">Template</span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
