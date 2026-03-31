import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { AppSidebar } from '@/components/app-sidebar'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { TooltipProvider } from '@/components/ui/tooltip'
import './App.css'

function Home() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">首页</h2>
      <p className="text-muted-foreground">欢迎使用 React Shadcn Template。</p>
    </div>
  )
}

function Feature1() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">功能1</h2>
      <p className="text-muted-foreground">这是功能1的页面内容。</p>
    </div>
  )
}

function Feature2() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">功能2</h2>
      <p className="text-muted-foreground">这是功能2的页面内容。</p>
    </div>
  )
}

function Feature3() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">功能3</h2>
      <p className="text-muted-foreground">这是功能3的页面内容。</p>
    </div>
  )
}

function About() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">关于</h2>
      <p className="text-muted-foreground">关于此模板的相关信息。</p>
    </div>
  )
}

function App() {
  return (
    <Router>
      <TooltipProvider>
        <SidebarProvider>
          <AppSidebar />
          <main className="flex-1 overflow-auto bg-background">
            <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
              <SidebarTrigger className="-ml-1" />
              <div className="w-px h-4 bg-border mx-2" />
              <h1 className="text-sm font-medium">React Shadcn Template</h1>
            </header>
            <div className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/feature1" element={<Feature1 />} />
                <Route path="/feature2" element={<Feature2 />} />
                <Route path="/feature3" element={<Feature3 />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </div>
          </main>
        </SidebarProvider>
      </TooltipProvider>
    </Router>
  )
}

export default App
