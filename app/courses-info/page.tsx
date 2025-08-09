'use client'

import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { BookOpen, Clock, Users, Star, ArrowLeft, Play, Award, CheckCircle, Target, Lightbulb, Menu, X, MessageCircle, Send, Mail, Phone, MapPin } from 'lucide-react'
import Link from 'next/link'

export default function CoursesInfoPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  
  // 滾動動畫觀察器
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll('.scroll-animate')
    elements.forEach((el) => observerRef.current?.observe(el))

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.email) {
      alert('請輸入您的電子郵件地址')
      return
    }
    
    setIsSubmitting(true)
    
    // 模擬提交
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 3000)
    }, 2000)
  }

  const courseCategories = [
    {
      title: "台灣歷史文化概論",
      description: "從史前時代到現代，全面了解台灣的歷史脈絡與文化發展",
      duration: "8小時",
      lessons: 12,
      level: "初級",
      icon: "🏛️",
      highlights: [
        "史前文化與原住民族",
        "漢人移民與開墾歷史", 
        "日治時期文化變遷",
        "戰後台灣社會發展"
      ],
      skills: ["歷史脈絡掌握", "文化背景理解", "時代特色分析"]
    },
    {
      title: "傳統建築與工藝",
      description: "深入探討台灣傳統建築特色與民間工藝技術",
      duration: "6小時", 
      lessons: 8,
      level: "中級",
      icon: "🏮",
      highlights: [
        "閩南建築風格特色",
        "廟宇建築裝飾藝術",
        "傳統工藝技法介紹",
        "建築保存與修復"
      ],
      skills: ["建築美學鑑賞", "工藝技法認識", "文物保存概念"]
    },
    {
      title: "導覽技巧與實務",
      description: "專業導覽技巧訓練與實地演練，提升導覽品質",
      duration: "10小時",
      lessons: 10, 
      level: "進階",
      icon: "🎭",
      highlights: [
        "專業導覽技巧訓練",
        "團體互動與管理",
        "突發狀況應對",
        "實地演練與評估"
      ],
      skills: ["口語表達能力", "團體領導技巧", "危機處理能力"]
    },
    {
      title: "多元文化融合",
      description: "認識台灣多元族群文化的交融與發展歷程",
      duration: "4小時",
      lessons: 6,
      level: "初級", 
      icon: "🌏",
      highlights: [
        "原住民族文化特色",
        "客家文化傳統",
        "新住民文化融合",
        "當代多元社會"
      ],
      skills: ["文化敏感度", "跨文化溝通", "包容性思維"]
    }
  ]

  const learningPath = [
    {
      step: 1,
      title: "基礎知識建立",
      description: "學習台灣歷史文化基礎知識",
      courses: ["台灣歷史文化概論", "多元文化融合"]
    },
    {
      step: 2, 
      title: "專業技能培養",
      description: "掌握建築工藝與導覽技巧",
      courses: ["傳統建築與工藝", "導覽技巧與實務"]
    },
    {
      step: 3,
      title: "實務經驗累積", 
      description: "透過實地演練提升專業能力",
      courses: ["實地導覽演練", "案例分析討論"]
    },
    {
      step: 4,
      title: "認證考核",
      description: "完成筆試與實作考核獲得證照",
      courses: ["線上筆試", "導覽影片評核"]
    }
  ]

  const features = [
    {
      icon: <Target className="w-6 h-6 md:w-8 md:h-8 text-amber-600" />,
      title: "系統化學習",
      description: "循序漸進的課程設計，從基礎到進階完整學習路徑"
    },
    {
      icon: <Users className="w-6 h-6 md:w-8 md:h-8 text-amber-600" />,
      title: "專業師資",
      description: "由資深文史專家與實務導覽師親自授課指導"
    },
    {
      icon: <Play className="w-6 h-6 md:w-8 md:h-8 text-amber-600" />,
      title: "實務演練",
      description: "結合理論與實作，提供豐富的實地演練機會"
    },
    {
      icon: <Award className="w-6 h-6 md:w-8 md:h-8 text-amber-600" />,
      title: "權威認證",
      description: "完成課程可獲得專業文化導覽師認證證照"
    }
  ]

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
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-amber-50">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm text-slate-800 sticky top-0 z-50 shadow-sm border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-14 md:h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2 hover:text-amber-600 transition-colors">
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm md:text-base">返回首頁</span>
              </Link>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/courses-info" className="text-slate-600 hover:text-amber-600 transition-colors font-medium hover-lift">課程介紹</Link>
              <Link href="/testimonials" className="text-slate-600 hover:text-amber-600 transition-colors font-medium hover-lift">學員見證</Link>
              <Link href="/contact" className="text-slate-600 hover:text-amber-600 transition-colors font-medium hover-lift">聯絡我們</Link>
              <div className="flex space-x-3">
                <Link href="/login">
                  <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50">
                    登入
                  </Button>
                </Link>
                <Link href="/register">
                  <Button className="professional-btn">
                    註冊
                  </Button>
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors relative z-50"
            >
              <div className={`w-6 h-6 relative transition-all duration-300`}>
                {isMenuOpen ? <X className="w-6 h-6 text-slate-700" /> : <Menu className="w-6 h-6 text-slate-700" />}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden fixed inset-0 z-[100] transition-all duration-1000 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
          {/* 完全遮蓋的背景層 */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-950 via-red-900 to-amber-900 cultural-menu-bg">
            {/* 文化紋樣背景 */}
            <div className="absolute inset-0 bg-[url('/traditional-chinese-pattern.png')] bg-cover bg-center opacity-25 animate-cultural-glow"></div>
            
            {/* 動態文化元素 */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-16 left-12 text-6xl text-amber-400 opacity-40 animate-enhanced-float">📚</div>
              <div className="absolute top-24 right-16 text-5xl text-red-400 opacity-35 animate-enhanced-float" style={{animationDelay: '1s'}}>🎓</div>
              <div className="absolute bottom-40 left-8 text-5xl text-amber-400 opacity-45 animate-enhanced-float" style={{animationDelay: '2s'}}>📖</div>
              <div className="absolute bottom-20 right-12 text-6xl text-red-400 opacity-30 animate-enhanced-float" style={{animationDelay: '0.5s'}}>🏛️</div>
              <div className="absolute top-1/2 left-6 text-4xl text-amber-300 opacity-50 animate-enhanced-float" style={{animationDelay: '1.5s'}}>⭐</div>
              <div className="absolute top-1/3 right-4 text-5xl text-red-300 opacity-40 animate-enhanced-float" style={{animationDelay: '2.5s'}}>🌸</div>
            </div>
            
            {/* 固定頂部關閉按鈕 */}
            <div className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-6 pt-8 bg-gradient-to-b from-black/30 to-transparent backdrop-blur-sm">
              <div className="animate-ink-brush">
                <h1 className="text-2xl font-handwriting text-amber-100 tracking-wider">
                  課程介紹
                </h1>
                <p className="text-amber-300 text-sm opacity-90 font-light">Course Information</p>
              </div>
              <button 
                onClick={toggleMenu}
                className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-500 hover:scale-110 border-2 border-white/20 hover:border-amber-400/50 animate-cultural-glow"
              >
                <X className="w-7 h-7 text-amber-100" />
              </button>
            </div>
            
            {/* 可滾動的主要內容區域 */}
            <div className="relative z-30 h-full overflow-y-auto animate-menu-fade-in pt-24">
              {/* 中央選單區域 */}
              <div className="flex flex-col justify-center min-h-full px-8 py-12">
                {/* 主標題 */}
                <div className="text-center mb-12 animate-paper-unfold">
                  <div className="w-32 h-32 bg-gradient-to-br from-amber-400 via-amber-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-8 animate-cultural-glow shadow-2xl border-4 border-white/30">
                    <span className="text-6xl animate-rotate-scale">📚</span>
                  </div>
                  <h2 className="text-4xl font-handwriting text-amber-100 tracking-wider mb-4">
                    選單
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto"></div>
                </div>

                {/* 主選單項目 */}
                <div className="space-y-6 max-w-md mx-auto w-full">
                  {/* 返回首頁 */}
                  <Link 
                    href="/" 
                    onClick={() => setIsMenuOpen(false)}
                    className="group block animate-menu-slide-in cultural-menu-item"
                  >
                    <div className="flex items-center justify-center space-x-6 p-6 rounded-3xl bg-gradient-to-r from-white/15 to-white/10 backdrop-blur-md hover:from-white/25 hover:to-white/15 transition-all duration-700 border-2 border-white/20 hover:border-amber-400/60 hover:scale-105 hover:shadow-2xl cultural-border">
                      <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-xl group-hover:shadow-2xl animate-breathe">
                        <ArrowLeft className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1 text-center">
                        <span className="text-2xl font-handwriting text-amber-100 block group-hover:text-white transition-colors duration-500 brush-text">
                          返回首頁
                        </span>
                        <p className="text-sm text-amber-200 opacity-80 group-hover:opacity-100 transition-opacity duration-500 font-light mt-1">
                          Home
                        </p>
                      </div>
                    </div>
                  </Link>

                  {/* 學員見證 */}
                  <Link 
                    href="/testimonials" 
                    onClick={() => setIsMenuOpen(false)}
                    className="group block animate-menu-slide-in cultural-menu-item"
                    style={{animationDelay: '0.2s'}}
                  >
                    <div className="flex items-center justify-center space-x-6 p-6 rounded-3xl bg-gradient-to-r from-white/15 to-white/10 backdrop-blur-md hover:from-white/25 hover:to-white/15 transition-all duration-700 border-2 border-white/20 hover:border-green-400/60 hover:scale-105 hover:shadow-2xl cultural-border">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-xl group-hover:shadow-2xl animate-breathe" style={{animationDelay: '0.5s'}}>
                        <Users className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1 text-center">
                        <span className="text-2xl font-handwriting text-amber-100 block group-hover:text-white transition-colors duration-500 brush-text">
                          學員見證
                        </span>
                        <p className="text-sm text-amber-200 opacity-80 group-hover:opacity-100 transition-opacity duration-500 font-light mt-1">
                          Testimonials
                        </p>
                      </div>
                    </div>
                  </Link>

                  {/* 聯絡我們 */}
                  <Link 
                    href="/contact" 
                    onClick={() => setIsMenuOpen(false)}
                    className="group block animate-menu-slide-in cultural-menu-item"
                    style={{animationDelay: '0.4s'}}
                  >
                    <div className="flex items-center justify-center space-x-6 p-6 rounded-3xl bg-gradient-to-r from-white/15 to-white/10 backdrop-blur-md hover:from-white/25 hover:to-white/15 transition-all duration-700 border-2 border-white/20 hover:border-purple-400/60 hover:scale-105 hover:shadow-2xl cultural-border">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-xl group-hover:shadow-2xl animate-breathe" style={{animationDelay: '1s'}}>
                        <MessageCircle className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1 text-center">
                        <span className="text-2xl font-handwriting text-amber-100 block group-hover:text-white transition-colors duration-500 brush-text">
                          聯絡我們
                        </span>
                        <p className="text-sm text-amber-200 opacity-80 group-hover:opacity-100 transition-opacity duration-500 font-light mt-1">
                          Contact
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>

                {/* 課程特色展示 */}
                <div className="mt-12 animate-menu-slide-in" style={{animationDelay: '0.6s'}}>
                  <div className="text-center mb-6">
                    <h3 className="text-amber-300 text-xl font-handwriting mb-2">課程特色</h3>
                    <div className="w-16 h-0.5 bg-amber-400 mx-auto"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
                    <div className="flex flex-col items-center p-4 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-3 animate-pulse-slow">
                        <span className="text-2xl">🏛️</span>
                      </div>
                      <span className="text-sm text-amber-200 text-center font-handwriting">歷史文化</span>
                    </div>
                    <div className="flex flex-col items-center p-4 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-3 animate-pulse-slow">
                        <span className="text-2xl">🏮</span>
                      </div>
                      <span className="text-sm text-amber-200 text-center font-handwriting">傳統工藝</span>
                    </div>
                    <div className="flex flex-col items-center p-4 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-3 animate-pulse-slow">
                        <span className="text-2xl">🎭</span>
                      </div>
                      <span className="text-sm text-amber-200 text-center font-handwriting">導覽技巧</span>
                    </div>
                    <div className="flex flex-col items-center p-4 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-3 animate-pulse-slow">
                        <span className="text-2xl">🌏</span>
                      </div>
                      <span className="text-sm text-amber-200 text-center font-handwriting">多元文化</span>
                    </div>
                  </div>
                </div>

                {/* 裝飾性文化元素 */}
                <div className="text-center mt-12 animate-menu-slide-in" style={{animationDelay: '0.8s'}}>
                  <div className="flex justify-center space-x-8 mb-6">
                    <span className="text-3xl animate-float">📚</span>
                    <span className="text-3xl animate-float" style={{animationDelay: '0.5s'}}>🎓</span>
                    <span className="text-3xl animate-float" style={{animationDelay: '1s'}}>📖</span>
                  </div>
                  <p className="text-amber-200 text-lg font-handwriting tracking-wider">
                    傳承文化 • 專業導覽
                  </p>
                  <div className="flex justify-center space-x-3 mt-4">
                    <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                  </div>
                </div>

                {/* 底部操作區域 */}
                <div className="mt-16 px-8 py-8 bg-black/30 backdrop-blur-md border-t border-white/20 rounded-t-3xl">
                  <div className="space-y-4 max-w-md mx-auto animate-menu-slide-in" style={{animationDelay: '1s'}}>
                    <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                      <Button className="w-full border-3 border-amber-400 bg-transparent text-amber-300 hover:bg-amber-400 hover:text-red-900 py-4 text-xl font-handwriting rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-2xl backdrop-blur-sm cultural-border">
                        會員登入
                      </Button>
                    </Link>
                    <Link href="/register" onClick={() => setIsMenuOpen(false)}>
                      <Button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-red-900 py-4 text-xl font-handwriting rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 animate-cultural-glow">
                        立即註冊
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 md:py-20 px-4 text-center cultural-gradient wave-bg">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-light text-white mb-4 md:mb-6 tracking-wide font-cultural animate-fade-in-up">
              課程介紹
            </h1>
            <div className="w-16 md:w-24 h-1 bg-amber-400 mx-auto mb-4 md:mb-6 animate-scale-in"></div>
            <p className="text-lg md:text-xl text-slate-200 leading-relaxed animate-fade-in-up px-4" style={{animationDelay: '0.2s'}}>
              專業系統化的文化導覽師培訓課程，讓您成為文化傳承的專業使者
            </p>
          </div>
        </div>
      </section>

      {/* Course Features */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-slate-800 mb-4 font-cultural scroll-animate">課程特色</h2>
            <div className="w-12 md:w-16 h-1 bg-amber-500 mx-auto scroll-animate"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover-lift scroll-animate" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-slate-800 text-lg md:text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm md:text-base">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Courses */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-slate-800 mb-4 font-cultural scroll-animate">詳細課程內容</h2>
            <div className="w-12 md:w-16 h-1 bg-amber-500 mx-auto scroll-animate"></div>
          </div>

          <div className="space-y-8 md:space-y-12">
            {courseCategories.map((course, index) => (
              <Card key={index} className="border-0 shadow-xl hover-lift scroll-animate" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="grid lg:grid-cols-3 gap-6 md:gap-8 p-6 md:p-8">
                  {/* 課程基本資訊 */}
                  <div className="lg:col-span-1">
                    <div className="text-center mb-6">
                      <div className="text-5xl md:text-6xl mb-4 animate-float">{course.icon}</div>
                      <h3 className="text-xl md:text-2xl font-semibold text-slate-800 mb-2">{course.title}</h3>
                      <p className="text-slate-600 mb-4 text-sm md:text-base">{course.description}</p>
                      <div className="flex flex-wrap justify-center gap-2 mb-4">
                        <Badge className={getLevelColor(course.level)}>{course.level}</Badge>
                        <Badge variant="outline" className="border-amber-300 text-amber-700">{course.duration}</Badge>
                      </div>
                    </div>
                    
                    <div className="space-y-3 text-sm md:text-base">
                      <div className="flex justify-between">
                        <span className="text-slate-600">課程時數：</span>
                        <span className="font-semibold">{course.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">課程數量：</span>
                        <span className="font-semibold">{course.lessons} 堂課</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">難度等級：</span>
                        <span className="font-semibold">{course.level}</span>
                      </div>
                    </div>
                  </div>

                  {/* 課程重點 */}
                  <div className="lg:col-span-1">
                    <h4 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
                      <BookOpen className="w-4 h-4 md:w-5 md:h-5 mr-2 text-amber-600" />
                      課程重點
                    </h4>
                    <ul className="space-y-3">
                      {course.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700 text-sm md:text-base">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 學習技能 */}
                  <div className="lg:col-span-1">
                    <h4 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
                      <Lightbulb className="w-4 h-4 md:w-5 md:h-5 mr-2 text-amber-600" />
                      學習技能
                    </h4>
                    <div className="space-y-2">
                      {course.skills.map((skill, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-amber-50 text-amber-800 mr-2 mb-2 text-xs md:text-sm">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="mt-6">
                      <Button className="w-full professional-btn hover-lift">
                        <Play className="w-4 h-4 mr-2" />
                        開始學習
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-br from-amber-50 to-slate-100">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-slate-800 mb-4 font-cultural scroll-animate">學習路徑</h2>
            <div className="w-12 md:w-16 h-1 bg-amber-500 mx-auto scroll-animate"></div>
            <p className="text-slate-600 mt-4 scroll-animate text-sm md:text-base">循序漸進的學習計劃，讓您穩步邁向專業導覽師</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 md:space-y-8">
              {learningPath.map((path, index) => (
                <div key={index} className="flex items-start space-x-4 md:space-x-6 scroll-animate" style={{animationDelay: `${index * 0.2}s`}}>
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold text-lg animate-pulse-slow">
                      {path.step}
                    </div>
                  </div>
                  <Card className="flex-1 border-0 shadow-lg hover-lift">
                    <CardHeader>
                      <CardTitle className="text-slate-800 text-lg md:text-xl">{path.title}</CardTitle>
                      <CardDescription className="text-slate-600 text-sm md:text-base">{path.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {path.courses.map((courseName, idx) => (
                          <Badge key={idx} variant="outline" className="border-amber-300 text-amber-700 text-xs md:text-sm">
                            {courseName}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 發送訊息區塊 - 重新設計 */}
      <section className="py-16 md:py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900 via-red-800 to-amber-800"></div>
        <div className="absolute inset-0 bg-[url('/traditional-chinese-pattern.png')] bg-cover bg-center opacity-10"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <div className="text-5xl md:text-6xl mb-6 animate-float">🏮</div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-amber-100 mb-4 font-cultural scroll-animate">
              有課程問題嗎？
            </h2>
            <div className="w-16 md:w-24 h-1 bg-amber-400 mx-auto mb-6 scroll-animate"></div>
            <p className="text-lg md:text-xl text-red-200 scroll-animate">
              我們很樂意為您解答課程相關問題，讓您安心學習
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Card className="border-0 shadow-2xl hover-lift overflow-hidden scroll-animate">
              <div className="bg-gradient-to-r from-amber-400 via-yellow-300 to-red-400 p-1">
                <div className="bg-white rounded-lg">
                  <CardHeader className="text-center p-6 md:p-8 bg-gradient-to-br from-red-50 to-amber-50">
                    <div className="flex justify-center space-x-4 mb-4">
                      <span className="text-3xl animate-bounce">📚</span>
                      <span className="text-3xl animate-bounce" style={{animationDelay: '0.1s'}}>🎓</span>
                      <span className="text-3xl animate-bounce" style={{animationDelay: '0.2s'}}>📖</span>
                    </div>
                    <CardTitle className="text-2xl md:text-3xl text-red-800 mb-2 font-cultural">
                      課程諮詢表單
                    </CardTitle>
                    <CardDescription className="text-red-600 text-sm md:text-base">
                      填寫以下資訊，我們的專業團隊將在4小時內回覆您
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="p-6 md:p-8">
                    {submitSuccess && (
                      <div className="mb-6 p-4 bg-green-50 border-2 border-green-300 rounded-xl animate-scale-in">
                        <div className="flex items-center justify-center">
                          <div className="flex-shrink-0 mr-3">
                            <CheckCircle className="w-8 h-8 text-green-500" />
                          </div>
                          <div className="text-center">
                            <p className="text-green-800 font-bold text-lg">諮詢表單提交成功！</p>
                            <p className="text-green-700 text-sm">我們已收到您的問題，專業顧問將在4小時內聯繫您。</p>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="grid lg:grid-cols-3 gap-8">
                      {/* 表單區域 */}
                      <div className="lg:col-span-2">
                        <form onSubmit={handleSubmit} className="space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="contact-form-item">
                              <Label htmlFor="name" className="text-red-800 font-bold mb-2 block text-sm md:text-base flex items-center">
                                <span className="text-2xl mr-2">👨‍🎓</span>
                                您的姓名
                              </Label>
                              <Input
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                className="border-2 border-red-200 focus:border-amber-500 focus:ring-amber-500 h-12 text-sm md:text-base bg-red-50/50 rounded-xl"
                                placeholder="請輸入您的姓名"
                              />
                            </div>
                            <div className="contact-form-item" style={{animationDelay: '0.1s'}}>
                              <Label htmlFor="email" className="text-red-800 font-bold mb-2 block text-sm md:text-base flex items-center">
                                <span className="text-2xl mr-2">📧</span>
                                聯絡信箱
                              </Label>
                              <Input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                className="border-2 border-red-200 focus:border-amber-500 focus:ring-amber-500 h-12 text-sm md:text-base bg-red-50/50 rounded-xl"
                                placeholder="請輸入您的Email"
                              />
                            </div>
                          </div>
                          
                          <div className="contact-form-item" style={{animationDelay: '0.2s'}}>
                            <Label htmlFor="subject" className="text-red-800 font-bold mb-2 block text-sm md:text-base flex items-center">
                              <span className="text-2xl mr-2">🎯</span>
                              諮詢主題
                            </Label>
                            <Input
                              id="subject"
                              name="subject"
                              value={formData.subject}
                              onChange={handleInputChange}
                              required
                              className="border-2 border-red-200 focus:border-amber-500 focus:ring-amber-500 h-12 text-sm md:text-base bg-red-50/50 rounded-xl"
                              placeholder="例如：課程費用、學習時間、證照考試等"
                            />
                          </div>
                          
                          <div className="contact-form-item" style={{animationDelay: '0.3s'}}>
                            <Label htmlFor="message" className="text-red-800 font-bold mb-2 block text-sm md:text-base flex items-center">
                              <span className="text-2xl mr-2">💭</span>
                              詳細問題
                            </Label>
                            <Textarea
                              id="message"
                              name="message"
                              value={formData.message}
                              onChange={handleInputChange}
                              required
                              rows={6}
                              className="border-2 border-red-200 focus:border-amber-500 focus:ring-amber-500 resize-none text-sm md:text-base bg-red-50/50 rounded-xl"
                              placeholder="請詳細描述您想了解的課程內容、學習需求或任何疑問，我們會提供專業的建議..."
                            />
                          </div>
                          
                          <div className="contact-form-item" style={{animationDelay: '0.4s'}}>
                            <Button 
                              type="submit" 
                              disabled={isSubmitting}
                              className="w-full bg-gradient-to-r from-red-600 to-amber-500 hover:from-red-700 hover:to-amber-600 text-white font-bold py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 rounded-xl"
                            >
                              {isSubmitting ? (
                                <div className="flex items-center justify-center space-x-3">
                                  <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                                  <span>提交中...</span>
                                </div>
                              ) : (
                                <div className="flex items-center justify-center space-x-3">
                                  <Send className="w-6 h-6" />
                                  <span>立即諮詢</span>
                                </div>
                              )}
                            </Button>
                          </div>
                        </form>
                      </div>

                      {/* 右側資訊 */}
                      <div className="space-y-4">
                        <div className="bg-gradient-to-br from-amber-100 to-red-100 p-4 rounded-xl border-2 border-amber-200">
                          <h4 className="font-bold text-red-800 mb-3 flex items-center text-sm md:text-base">
                            <span className="text-xl mr-2">⚡</span>
                            快速回覆保證
                          </h4>
                          <ul className="space-y-2 text-xs md:text-sm text-red-700">
                            <li className="flex items-center">
                              <span className="text-base mr-2">✅</span>
                              4小時內專業回覆
                            </li>
                            <li className="flex items-center">
                              <span className="text-base mr-2">✅</span>
                              一對一課程諮詢
                            </li>
                            <li className="flex items-center">
                              <span className="text-base mr-2">✅</span>
                              免費學習規劃
                            </li>
                          </ul>
                        </div>

                        <div className="bg-gradient-to-br from-amber-100 to-red-100 p-4 rounded-xl border-2 border-amber-200">
                          <h4 className="font-bold text-red-800 mb-3 flex items-center text-sm md:text-base">
                            <span className="text-xl mr-2">📞</span>
                            其他聯絡方式
                          </h4>
                          <div className="space-y-2 text-xs md:text-sm">
                            <div className="flex items-center space-x-2 text-red-700">
                              <Mail className="w-4 h-4" />
                              <span>info@culturalguide.edu.tw</span>
                            </div>
                            <div className="flex items-center space-x-2 text-red-700">
                              <Phone className="w-4 h-4" />
                              <span>(02) 2388-5566</span>
                            </div>
                            <div className="flex items-center space-x-2 text-red-700">
                              <MapPin className="w-4 h-4" />
                              <span>台北市中正區重慶南路一段122號8樓</span>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gradient-to-br from-green-100 to-blue-100 p-4 rounded-xl border-2 border-green-200 text-center">
                          <div className="text-2xl mb-2">🎁</div>
                          <h4 className="font-bold text-green-800 mb-2 text-sm md:text-base">限時優惠</h4>
                          <p className="text-xs text-green-700">現在諮詢享早鳥優惠價</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto scroll-animate">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-slate-800 mb-4 md:mb-6">準備開始學習了嗎？</h2>
            <p className="text-lg md:text-xl text-slate-600 mb-6 md:mb-8">
              加入我們的專業培訓課程，成為認證的文化導覽師
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register">
                <Button size="lg" className="professional-btn hover-lift w-full sm:w-auto">
                  立即報名
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="professional-btn-outline hover-lift w-full sm:w-auto">
                  諮詢課程
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
