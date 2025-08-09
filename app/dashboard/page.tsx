'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { BookOpen, Award, Calendar, Download, User, LogOut, Bell, CheckCircle, Clock, AlertCircle, Play, FileText, Trophy } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function DashboardPage() {
  const [user, setUser] = useState({ name: '王小明', email: 'demo@example.com' })
  const [showUserMenu, setShowUserMenu] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // 檢查登入狀態
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    if (!isLoggedIn) {
      router.push('/login')
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('userEmail')
    router.push('/')
  }

  const courses = [
    {
      title: "台灣歷史文化概論",
      progress: 85,
      status: "進行中",
      totalLessons: 12,
      completedLessons: 10,
      nextLesson: "日治時期的文化變遷"
    },
    {
      title: "傳統建築與工藝",
      progress: 60,
      status: "進行中", 
      totalLessons: 8,
      completedLessons: 5,
      nextLesson: "廟宇建築特色"
    },
    {
      title: "導覽技巧與實務",
      progress: 100,
      status: "已完成",
      totalLessons: 10,
      completedLessons: 10,
      nextLesson: null
    },
    {
      title: "多元文化融合",
      progress: 30,
      status: "進行中",
      totalLessons: 6,
      completedLessons: 2,
      nextLesson: "原住民文化介紹"
    }
  ]

  const examStatus = {
    written: { status: "已通過", score: 88, date: "2024/01/15" },
    practical: { status: "待考試", score: null, date: "2024/03/01" }
  }

  const upcomingEvents = [
    {
      title: "實地導覽考試",
      date: "2024/03/01",
      time: "09:00",
      location: "國立故宮博物院",
      type: "考試"
    },
    {
      title: "文化導覽技巧工作坊",
      date: "2024/02/25",
      time: "14:00",
      location: "線上會議室",
      type: "工作坊"
    },
    {
      title: "學員交流會",
      date: "2024/02/20",
      time: "19:00",
      location: "台北文化中心",
      type: "活動"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-red-50">
      {/* Navigation */}
      <nav className="bg-red-900 text-amber-50 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="text-2xl">🏛️</div>
              <span className="text-xl font-bold">文化導覽師學院</span>
              {/* 可以添加導覽選單 */}
              <div className="hidden md:flex items-center space-x-6 ml-8">
                <Link href="/courses-info" className="hover:text-amber-300 transition-colors">課程介紹</Link>
                <Link href="/testimonials" className="hover:text-amber-300 transition-colors">學員見證</Link>
                <Link href="/contact" className="hover:text-amber-300 transition-colors">聯絡我們</Link>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-amber-100 hover:bg-red-800">
                <Bell className="w-4 h-4" />
              </Button>
              
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center space-x-2 hover:bg-red-800 rounded-lg p-2 transition-colors"
                >
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="/generic-user-avatar.png" />
                    <AvatarFallback className="bg-amber-600 text-red-900">
                      {user.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <span className="hidden md:block">{user.name}</span>
                </button>
                
                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                    <div className="p-3 border-b border-gray-100">
                      <p className="font-semibold text-gray-800">{user.name}</p>
                      <p className="text-sm text-gray-600">{user.email}</p>
                    </div>
                    <div className="p-2">
                      <button className="w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span>個人資料</span>
                      </button>
                      <button 
                        onClick={handleLogout}
                        className="w-full text-left px-3 py-2 text-red-600 hover:bg-red-50 rounded-md flex items-center space-x-2"
                      >
                        <LogOut className="w-4 h-4" />
                        <span>登出</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-red-900 mb-2">
            歡迎回來，{user.name}！
          </h1>
          <p className="text-gray-600">繼續您的文化導覽師學習之旅</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* My Courses */}
            <Card className="border-2 border-amber-200">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-red-900">
                  <BookOpen className="w-5 h-5" />
                  <span>我的課程</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {courses.map((course, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-semibold text-gray-800">{course.title}</h3>
                        <p className="text-sm text-gray-600">
                          {course.completedLessons}/{course.totalLessons} 課程完成
                        </p>
                      </div>
                      <Badge 
                        variant={course.status === "已完成" ? "default" : "secondary"}
                        className={course.status === "已完成" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"}
                      >
                        {course.status}
                      </Badge>
                    </div>
                    
                    <Progress value={course.progress} className="mb-3" />
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">
                        進度: {course.progress}%
                      </span>
                      {course.nextLesson && (
                        <Button size="sm" className="bg-red-800 hover:bg-red-900 text-amber-100">
                          <Play className="w-4 h-4 mr-1" />
                          繼續學習
                        </Button>
                      )}
                    </div>
                    
                    {course.nextLesson && (
                      <p className="text-sm text-amber-700 mt-2">
                        下一課：{course.nextLesson}
                      </p>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Exam Status */}
            <Card className="border-2 border-amber-200">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-red-900">
                  <Award className="w-5 h-5" />
                  <span>我的考核狀態</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-800">筆試</h3>
                      {examStatus.written.status === "已通過" ? (
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      ) : (
                        <Clock className="w-5 h-5 text-amber-600" />
                      )}
                    </div>
                    <Badge 
                      variant={examStatus.written.status === "已通過" ? "default" : "secondary"}
                      className={examStatus.written.status === "已通過" ? "bg-green-100 text-green-800" : "bg-amber-100 text-amber-800"}
                    >
                      {examStatus.written.status}
                    </Badge>
                    {examStatus.written.score && (
                      <p className="text-sm text-gray-600 mt-2">
                        分數: {examStatus.written.score}分
                      </p>
                    )}
                    <p className="text-sm text-gray-500">
                      考試日期: {examStatus.written.date}
                    </p>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-800">實作考試</h3>
                      <AlertCircle className="w-5 h-5 text-amber-600" />
                    </div>
                    <Badge variant="secondary" className="bg-amber-100 text-amber-800">
                      {examStatus.practical.status}
                    </Badge>
                    <p className="text-sm text-gray-500 mt-2">
                      預定日期: {examStatus.practical.date}
                    </p>
                    <Button size="sm" className="mt-3 bg-amber-600 hover:bg-amber-700 text-red-900">
                      報名考試
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Certificate */}
            <Card className="border-2 border-amber-200">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-red-900">
                  <Trophy className="w-5 h-5" />
                  <span>我的證書</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <div className="text-6xl mb-4">🏆</div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">證書尚未取得</h3>
                  <p className="text-gray-600 mb-4">
                    完成所有課程並通過考核後，即可獲得正式證書
                  </p>
                  <div className="flex justify-center space-x-2">
                    <Button variant="outline" disabled className="border-gray-300 text-gray-500">
                      <Download className="w-4 h-4 mr-2" />
                      下載證書
                    </Button>
                    <Button variant="outline" disabled className="border-gray-300 text-gray-500">
                      <FileText className="w-4 h-4 mr-2" />
                      查看成績單
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Events */}
            <Card className="border-2 border-amber-200">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-red-900">
                  <Calendar className="w-5 h-5" />
                  <span>即將舉辦</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="border-l-4 border-l-red-600 pl-3 py-2">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-semibold text-sm text-gray-800">{event.title}</h4>
                      <Badge 
                        variant="outline" 
                        className={
                          event.type === "考試" ? "border-red-300 text-red-700" :
                          event.type === "工作坊" ? "border-blue-300 text-blue-700" :
                          "border-green-300 text-green-700"
                        }
                      >
                        {event.type}
                      </Badge>
                    </div>
                    <p className="text-xs text-gray-600">
                      📅 {event.date} {event.time}
                    </p>
                    <p className="text-xs text-gray-500">
                      📍 {event.location}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-2 border-amber-200">
              <CardHeader>
                <CardTitle className="text-red-900">快速操作</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link href="/courses">
                  <Button className="w-full bg-red-800 hover:bg-red-900 text-amber-100">
                    <BookOpen className="w-4 h-4 mr-2" />
                    瀏覽課程
                  </Button>
                </Link>
                <Link href="/certification">
                  <Button variant="outline" className="w-full border-amber-400 text-amber-700 hover:bg-amber-50">
                    <Award className="w-4 h-4 mr-2" />
                    證照考核
                  </Button>
                </Link>
                <Button variant="outline" className="w-full border-red-300 text-red-700 hover:bg-red-50">
                  補考申請
                </Button>
              </CardContent>
            </Card>

            {/* Study Progress */}
            <Card className="border-2 border-amber-200">
              <CardHeader>
                <CardTitle className="text-red-900">學習統計</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-800">68%</div>
                  <p className="text-sm text-gray-600">總體完成度</p>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">已完成課程</span>
                    <span className="font-semibold">17/28</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">學習時數</span>
                    <span className="font-semibold">45小時</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">本月學習</span>
                    <span className="font-semibold">12小時</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
