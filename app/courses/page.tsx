'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { BookOpen, Play, Clock, Users, Star, ArrowLeft, Download, FileText, Video } from 'lucide-react'
import Link from 'next/link'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const courseCategories = [
    { id: 'all', name: '全部課程', count: 28 },
    { id: 'history', name: '歷史文化', count: 8 },
    { id: 'architecture', name: '建築工藝', count: 6 },
    { id: 'skills', name: '導覽技巧', count: 10 },
    { id: 'culture', name: '多元文化', count: 4 }
  ]

  const courses = [
    {
      id: 1,
      title: "台灣歷史文化概論",
      category: "history",
      description: "從史前時代到現代，全面了解台灣的歷史脈絡與文化發展",
      instructor: "陳文史教授",
      duration: "8小時",
      lessons: 12,
      students: 1250,
      rating: 4.8,
      progress: 85,
      status: "進行中",
      thumbnail: "/taiwan-history-museum.png",
      level: "初級",
      tags: ["歷史", "文化", "台灣"],
      nextLesson: "日治時期的文化變遷"
    },
    {
      id: 2,
      title: "傳統建築與工藝",
      category: "architecture", 
      description: "深入探討台灣傳統建築特色與民間工藝技術",
      instructor: "林建築師",
      duration: "6小時",
      lessons: 8,
      students: 890,
      rating: 4.9,
      progress: 60,
      status: "進行中",
      thumbnail: "/traditional-chinese-temple.png",
      level: "中級",
      tags: ["建築", "工藝", "傳統"],
      nextLesson: "廟宇建築特色"
    },
    {
      id: 3,
      title: "導覽技巧與實務",
      category: "skills",
      description: "專業導覽技巧訓練與實地演練，提升導覽品質",
      instructor: "王導覽師",
      duration: "10小時", 
      lessons: 10,
      students: 2100,
      rating: 4.7,
      progress: 100,
      status: "已完成",
      thumbnail: "/tour-guide-leading-group.png",
      level: "進階",
      tags: ["技巧", "實務", "導覽"],
      nextLesson: null
    },
    {
      id: 4,
      title: "多元文化融合",
      category: "culture",
      description: "認識台灣多元族群文化的交融與發展歷程",
      instructor: "張文化學者",
      duration: "4小時",
      lessons: 6,
      students: 650,
      rating: 4.6,
      progress: 30,
      status: "進行中",
      thumbnail: "/multicultural-taiwan-festival.png",
      level: "初級",
      tags: ["多元", "族群", "文化"],
      nextLesson: "原住民文化介紹"
    },
    {
      id: 5,
      title: "古蹟保存與維護",
      category: "architecture",
      description: "學習古蹟保存的重要性與維護技術",
      instructor: "李保存專家",
      duration: "5小時",
      lessons: 7,
      students: 420,
      rating: 4.5,
      progress: 0,
      status: "未開始",
      thumbnail: "/placeholder.svg?height=200&width=300",
      level: "中級",
      tags: ["古蹟", "保存", "維護"],
      nextLesson: "古蹟保存概論"
    },
    {
      id: 6,
      title: "文物解說技巧",
      category: "skills",
      description: "專業文物解說方法與互動技巧訓練",
      instructor: "劉解說員",
      duration: "7小時",
      lessons: 9,
      students: 780,
      rating: 4.8,
      progress: 0,
      status: "未開始",
      thumbnail: "/placeholder.svg?height=200&width=300",
      level: "進階",
      tags: ["文物", "解說", "互動"],
      nextLesson: "文物解說基礎"
    }
  ]

  const filteredCourses = selectedCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory)

  const getStatusColor = (status: string) => {
    switch (status) {
      case '已完成':
        return 'bg-green-100 text-green-800'
      case '進行中':
        return 'bg-blue-100 text-blue-800'
      case '未開始':
        return 'bg-gray-100 text-gray-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getLevelColor = (level: string) => {
    switch (level) {
      case '初級':
        return 'bg-green-100 text-green-800'
      case '中級':
        return 'bg-amber-100 text-amber-800'
      case '進階':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-red-50">
      {/* Navigation */}
      <nav className="bg-red-900 text-amber-50 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/dashboard" className="flex items-center space-x-2 hover:text-amber-300 transition-colors">
                <ArrowLeft className="w-4 h-4" />
                <span>返回儀表板</span>
              </Link>
            </div>
            <div className="flex items-center space-x-2">
              <div className="text-2xl">🏛️</div>
              <span className="text-xl font-bold">課程中心</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-red-900 mb-2">我的課程</h1>
          <p className="text-gray-600">探索豐富的文化導覽課程，提升您的專業技能</p>
        </div>

        {/* Category Tabs */}
        <div className="mb-8">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
            <TabsList className="grid w-full grid-cols-5 lg:w-auto lg:grid-cols-none lg:flex">
              {courseCategories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="data-[state=active]:bg-red-800 data-[state=active]:text-amber-100"
                >
                  {category.name}
                  <Badge variant="secondary" className="ml-2 bg-amber-100 text-amber-800">
                    {category.count}
                  </Badge>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <Card key={course.id} className="border-2 border-amber-200 hover:border-amber-400 transition-all duration-300 hover:shadow-lg group">
              <div className="relative">
<img 
  src={course.thumbnail || `${publicRuntimeConfig.basePath}/placeholder.svg`}
  alt={course.title}
  className="w-full h-48 object-cover rounded-t-lg"
/>

                <div className="absolute top-3 left-3">
                  <Badge className={getStatusColor(course.status)}>
                    {course.status}
                  </Badge>
                </div>
                <div className="absolute top-3 right-3">
                  <Badge className={getLevelColor(course.level)}>
                    {course.level}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-red-800 text-lg leading-tight">
                    {course.title}
                  </CardTitle>
                </div>
                <CardDescription className="text-gray-600 line-clamp-2">
                  {course.description}
                </CardDescription>
                
                {/* Course Info */}
                <div className="flex items-center justify-between text-sm text-gray-500 mt-3">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <BookOpen className="w-4 h-4" />
                    <span>{course.lessons} 課程</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{course.students}</span>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-2 mt-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${
                          i < Math.floor(course.rating) 
                            ? 'fill-amber-400 text-amber-400' 
                            : 'text-gray-300'
                        }`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">{course.rating}</span>
                </div>

                {/* Instructor */}
                <p className="text-sm text-gray-600 mt-2">
                  講師：{course.instructor}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mt-3">
                  {course.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs border-amber-300 text-amber-700">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>

              <CardContent>
                {/* Progress */}
                {course.progress > 0 && (
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">學習進度</span>
                      <span className="text-sm font-semibold text-red-800">{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                  </div>
                )}

                {/* Next Lesson */}
                {course.nextLesson && (
                  <div className="mb-4 p-3 bg-amber-50 rounded-lg border border-amber-200">
                    <p className="text-sm text-amber-800">
                      <strong>下一課：</strong>{course.nextLesson}
                    </p>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  {course.status === '已完成' ? (
                    <>
                      <Button size="sm" variant="outline" className="flex-1 border-green-300 text-green-700 hover:bg-green-50">
                        <FileText className="w-4 h-4 mr-1" />
                        複習
                      </Button>
                      <Button size="sm" variant="outline" className="border-amber-300 text-amber-700 hover:bg-amber-50">
                        <Download className="w-4 h-4" />
                      </Button>
                    </>
                  ) : course.status === '進行中' ? (
                    <Button size="sm" className="flex-1 bg-red-800 hover:bg-red-900 text-amber-100">
                      <Play className="w-4 h-4 mr-1" />
                      繼續學習
                    </Button>
                  ) : (
                    <Button size="sm" className="flex-1 bg-amber-600 hover:bg-amber-700 text-red-900">
                      <Video className="w-4 h-4 mr-1" />
                      開始學習
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📚</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">暫無課程</h3>
            <p className="text-gray-600">此分類下暫時沒有可用的課程</p>
          </div>
        )}
      </div>
    </div>
  )
}
