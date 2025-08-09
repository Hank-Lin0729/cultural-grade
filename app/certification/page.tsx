'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Award, Clock, CheckCircle, AlertCircle, Upload, FileVideo, ArrowLeft, Trophy, Calendar, Users, Star, Download } from 'lucide-react'
import Link from 'next/link'

export default function CertificationPage() {
  const [selectedTab, setSelectedTab] = useState('overview')
  const [uploadedVideo, setUploadedVideo] = useState<File | null>(null)

  const certificationRequirements = [
    {
      title: "完成所有必修課程",
      description: "需完成4門核心課程，總計28小時",
      status: "completed",
      progress: 100
    },
    {
      title: "通過線上筆試",
      description: "筆試成績需達80分以上",
      status: "completed",
      progress: 100,
      score: 88
    },
    {
      title: "提交導覽影片",
      description: "錄製10-15分鐘的實地導覽影片",
      status: "pending",
      progress: 0
    },
    {
      title: "通過實作評核",
      description: "由專業評審進行影片評分",
      status: "locked",
      progress: 0
    }
  ]

  const examHistory = [
    {
      date: "2024/01/15",
      type: "筆試",
      score: 88,
      status: "通過",
      duration: "90分鐘"
    },
    {
      date: "2023/12/20",
      type: "筆試",
      score: 76,
      status: "未通過",
      duration: "90分鐘"
    }
  ]

  const upcomingExams = [
    {
      date: "2024/03/15",
      time: "14:00-15:30",
      type: "筆試補考",
      location: "線上考試",
      seats: "無限制"
    },
    {
      date: "2024/04/01",
      time: "09:00-17:00",
      type: "實地導覽考試",
      location: "國立故宮博物院",
      seats: "剩餘 8/20 名額"
    }
  ]

  const handleVideoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setUploadedVideo(file)
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-600" />
      case 'pending':
        return <Clock className="w-5 h-5 text-amber-600" />
      case 'locked':
        return <AlertCircle className="w-5 h-5 text-gray-400" />
      default:
        return <AlertCircle className="w-5 h-5 text-gray-400" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800'
      case 'pending':
        return 'bg-amber-100 text-amber-800'
      case 'locked':
        return 'bg-gray-100 text-gray-600'
      default:
        return 'bg-gray-100 text-gray-600'
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
              <div className="text-2xl">🏆</div>
              <span className="text-xl font-bold">證照考核</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-red-900 mb-2">文化導覽師證照考核</h1>
          <p className="text-gray-600">完成所有要求，獲得專業認證</p>
        </div>

        <Tabs value={selectedTab} onValueChange={setSelectedTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview" className="data-[state=active]:bg-red-800 data-[state=active]:text-amber-100">
              考核概覽
            </TabsTrigger>
            <TabsTrigger value="exam" className="data-[state=active]:bg-red-800 data-[state=active]:text-amber-100">
              線上筆試
            </TabsTrigger>
            <TabsTrigger value="video" className="data-[state=active]:bg-red-800 data-[state=active]:text-amber-100">
              影片上傳
            </TabsTrigger>
            <TabsTrigger value="schedule" className="data-[state=active]:bg-red-800 data-[state=active]:text-amber-100">
              考試時程
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Progress Overview */}
            <Card className="border-2 border-amber-200">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-red-900">
                  <Trophy className="w-5 h-5" />
                  <span>認證進度</span>
                </CardTitle>
                <CardDescription>
                  完成所有要求即可獲得文化導覽師專業證照
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">整體進度</span>
                    <span className="text-sm font-semibold text-red-800">50%</span>
                  </div>
                  <Progress value={50} className="h-3" />
                </div>

                <div className="space-y-4">
                  {certificationRequirements.map((req, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-start space-x-3">
                          {getStatusIcon(req.status)}
                          <div>
                            <h3 className="font-semibold text-gray-800">{req.title}</h3>
                            <p className="text-sm text-gray-600">{req.description}</p>
                          </div>
                        </div>
                        <Badge className={getStatusColor(req.status)}>
                          {req.status === 'completed' ? '已完成' : 
                           req.status === 'pending' ? '進行中' : '未開放'}
                        </Badge>
                      </div>
                      
                      {req.progress > 0 && (
                        <div className="mt-3">
                          <Progress value={req.progress} className="h-2" />
                        </div>
                      )}
                      
                      {req.score && (
                        <p className="text-sm text-green-700 mt-2">
                          成績：{req.score}分
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Certificate Preview */}
            <Card className="border-2 border-amber-200">
              <CardHeader>
                <CardTitle className="text-red-900">證書預覽</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 bg-gradient-to-br from-amber-50 to-red-50 rounded-lg border-2 border-dashed border-amber-300">
                  <div className="text-6xl mb-4">🏆</div>
                  <h3 className="text-xl font-semibold text-red-800 mb-2">
                    文化導覽師專業證照
                  </h3>
                  <p className="text-gray-600 mb-4">
                    完成所有考核後，您將獲得此專業認證
                  </p>
                  <div className="text-sm text-gray-500">
                    證書編號：CG-2024-XXXX<br />
                    有效期限：永久有效
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Exam Tab */}
          <TabsContent value="exam" className="space-y-6">
            <Card className="border-2 border-amber-200">
              <CardHeader>
                <CardTitle className="text-red-900">線上筆試</CardTitle>
                <CardDescription>
                  測驗您對文化導覽相關知識的掌握程度
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Alert className="mb-6 border-green-200 bg-green-50">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <AlertDescription className="text-green-800">
                    恭喜！您已通過線上筆試，成績：88分
                  </AlertDescription>
                </Alert>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3">考試資訊</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">考試時間：</span>
                        <span>90分鐘</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">題目數量：</span>
                        <span>50題</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">及格分數：</span>
                        <span>80分</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">考試次數：</span>
                        <span>最多3次</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3">考試範圍</h3>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• 台灣歷史文化 (30%)</li>
                      <li>• 傳統建築工藝 (25%)</li>
                      <li>• 導覽技巧實務 (25%)</li>
                      <li>• 多元文化認識 (20%)</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="font-semibold text-gray-800 mb-3">考試記錄</h3>
                  <div className="space-y-3">
                    {examHistory.map((exam, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-800">{exam.type}</p>
                          <p className="text-sm text-gray-600">{exam.date} • {exam.duration}</p>
                        </div>
                        <div className="text-right">
                          <Badge className={exam.status === '通過' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}>
                            {exam.status}
                          </Badge>
                          <p className="text-sm text-gray-600 mt-1">{exam.score}分</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Video Upload Tab */}
          <TabsContent value="video" className="space-y-6">
            <Card className="border-2 border-amber-200">
              <CardHeader>
                <CardTitle className="text-red-900">導覽影片上傳</CardTitle>
                <CardDescription>
                  請錄製一段10-15分鐘的實地導覽影片
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Alert className="mb-6 border-amber-200 bg-amber-50">
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                  <AlertDescription className="text-amber-800">
                    請先完成所有課程並通過筆試後，才能上傳導覽影片
                  </AlertDescription>
                </Alert>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3">影片要求</h3>
                    <ul className="text-sm space-y-2 text-gray-600">
                      <li>• 影片長度：10-15分鐘</li>
                      <li>• 檔案格式：MP4, MOV, AVI</li>
                      <li>• 檔案大小：最大500MB</li>
                      <li>• 解析度：至少720p</li>
                      <li>• 音質清晰，無雜音</li>
                      <li>• 需包含完整導覽流程</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3">評分標準</h3>
                    <ul className="text-sm space-y-2 text-gray-600">
                      <li>• 內容準確性 (30%)</li>
                      <li>• 表達清晰度 (25%)</li>
                      <li>• 互動技巧 (20%)</li>
                      <li>• 專業形象 (15%)</li>
                      <li>• 創新表現 (10%)</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 p-6 border-2 border-dashed border-gray-300 rounded-lg text-center">
                  <FileVideo className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">上傳導覽影片</h3>
                  <p className="text-gray-600 mb-4">
                    拖拽影片檔案到此處，或點擊選擇檔案
                  </p>
                  
                  <input
                    type="file"
                    accept="video/*"
                    onChange={handleVideoUpload}
                    className="hidden"
                    id="video-upload"
                  />
                  <label htmlFor="video-upload">
                    <Button className="bg-amber-600 hover:bg-amber-700 text-red-900" disabled>
                      <Upload className="w-4 h-4 mr-2" />
                      選擇影片檔案
                    </Button>
                  </label>
                  
                  {uploadedVideo && (
                    <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-green-800">
                        已選擇檔案：{uploadedVideo.name}
                      </p>
                    </div>
                  )}
                </div>

                <div className="mt-6">
                  <h3 className="font-semibold text-gray-800 mb-3">影片狀態</h3>
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-800">尚未上傳</p>
                        <p className="text-sm text-gray-600">請完成前置要求後上傳影片</p>
                      </div>
                      <Badge className="bg-gray-100 text-gray-600">
                        待上傳
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Schedule Tab */}
          <TabsContent value="schedule" className="space-y-6">
            <Card className="border-2 border-amber-200">
              <CardHeader>
                <CardTitle className="text-red-900">考試時程</CardTitle>
                <CardDescription>
                  查看即將舉行的考試與報名資訊
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingExams.map((exam, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-semibold text-gray-800">{exam.type}</h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>{exam.date}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{exam.time}</span>
                            </div>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">
                            地點：{exam.location}
                          </p>
                        </div>
                        <div className="text-right">
                          <Badge variant="outline" className="border-amber-300 text-amber-700">
                            {exam.seats}
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="flex justify-end">
                        <Button 
                          size="sm" 
                          className="bg-red-800 hover:bg-red-900 text-amber-100"
                          disabled={exam.type.includes('補考')}
                        >
                          {exam.type.includes('補考') ? '已報名' : '立即報名'}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                <Alert className="mt-6 border-blue-200 bg-blue-50">
                  <AlertCircle className="w-4 h-4 text-blue-600" />
                  <AlertDescription className="text-blue-800">
                    <strong>注意事項：</strong><br />
                    • 考試報名截止時間為考試前3天<br />
                    • 實地考試需攜帶身分證件<br />
                    • 如需取消報名，請於考試前24小時聯繫客服
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
