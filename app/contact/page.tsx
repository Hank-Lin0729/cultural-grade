'use client'

import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Mail, Phone, MapPin, Clock, Send, ArrowLeft, Facebook, Instagram, MessageSquare, Users, Award, BookOpen, HelpCircle, Menu, X, MessageCircle, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    category: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 md:w-6 md:h-6 text-amber-600" />,
      title: "電子郵件",
      content: "info@culturalguide.edu.tw",
      description: "我們會在24小時內回覆您的郵件"
    },
    {
      icon: <Phone className="w-5 h-5 md:w-6 md:h-6 text-amber-600" />,
      title: "聯絡電話",
      content: "(02) 2388-5566",
      description: "服務時間：週一至週五 09:00-18:00"
    },
    {
      icon: <MapPin className="w-5 h-5 md:w-6 md:h-6 text-amber-600" />,
      title: "辦公地址",
      content: "台北市中正區重慶南路一段122號8樓",
      description: "歡迎預約參觀我們的教學環境"
    },
    {
      icon: <Clock className="w-5 h-5 md:w-6 md:h-6 text-amber-600" />,
      title: "服務時間",
      content: "週一至週五 09:00-18:00",
      description: "週六 10:00-17:00，週日及國定假日休息"
    }
  ]

  const faqCategories = [
    {
      icon: <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-amber-600" />,
      title: "課程相關",
      questions: [
        "課程需要什麼基礎嗎？",
        "可以分期付款嗎？",
        "課程時間如何安排？",
        "有提供課程教材嗎？"
      ]
    },
    {
      icon: <Award className="w-5 h-5 md:w-6 md:h-6 text-amber-600" />,
      title: "證照考核",
      questions: [
        "考試難度如何？",
        "證照有效期限？",
        "補考如何申請？",
        "證照全國通用嗎？"
      ]
    },
    {
      icon: <Users className="w-5 h-5 md:w-6 md:h-6 text-amber-600" />,
      title: "學員服務",
      questions: [
        "有學員交流群組嗎？",
        "提供就業輔導嗎？",
        "課後有諮詢服務嗎？",
        "可以重複觀看課程嗎？"
      ]
    }
  ]

  const socialMedia = [
    {
      name: "Facebook",
      icon: <Facebook className="w-5 h-5 md:w-6 md:h-6" />,
      handle: "@CulturalGuideAcademy",
      description: "最新課程資訊與活動公告"
    },
    {
      name: "Instagram", 
      icon: <Instagram className="w-5 h-5 md:w-6 md:h-6" />,
      handle: "@cultural_guide_tw",
      description: "學員作品分享與文化知識"
    },
    {
      name: "LINE",
      icon: <MessageSquare className="w-5 h-5 md:w-6 md:h-6" />,
      handle: "@culturalguide",
      description: "即時客服與課程諮詢"
    }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
      setFormData({ name: '', email: '', phone: '', subject: '', category: '', message: '' })
      
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
    }, 2000)
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
              <div className="absolute top-16 left-12 text-6xl text-amber-400 opacity-40 animate-enhanced-float">📞</div>
              <div className="absolute top-24 right-16 text-5xl text-red-400 opacity-35 animate-enhanced-float" style={{animationDelay: '1s'}}>💬</div>
              <div className="absolute bottom-40 left-8 text-5xl text-amber-400 opacity-45 animate-enhanced-float" style={{animationDelay: '2s'}}>📧</div>
              <div className="absolute bottom-20 right-12 text-6xl text-red-400 opacity-30 animate-enhanced-float" style={{animationDelay: '0.5s'}}>🏛️</div>
              <div className="absolute top-1/2 left-6 text-4xl text-amber-300 opacity-50 animate-enhanced-float" style={{animationDelay: '1.5s'}}>⭐</div>
              <div className="absolute top-1/3 right-4 text-5xl text-red-300 opacity-40 animate-enhanced-float" style={{animationDelay: '2.5s'}}>🌸</div>
            </div>
            
            {/* 固定頂部關閉按鈕 */}
            <div className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-6 pt-8 bg-gradient-to-b from-black/30 to-transparent backdrop-blur-sm">
              <div className="animate-ink-brush">
                <h1 className="text-2xl font-handwriting text-amber-100 tracking-wider">
                  聯絡我們
                </h1>
                <p className="text-amber-300 text-sm opacity-90 font-light">Contact Us</p>
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
                    <span className="text-6xl animate-rotate-scale">📞</span>
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

                  {/* 課程介紹 */}
                  <Link 
                    href="/courses-info" 
                    onClick={() => setIsMenuOpen(false)}
                    className="group block animate-menu-slide-in cultural-menu-item"
                    style={{animationDelay: '0.2s'}}
                  >
                    <div className="flex items-center justify-center space-x-6 p-6 rounded-3xl bg-gradient-to-r from-white/15 to-white/10 backdrop-blur-md hover:from-white/25 hover:to-white/15 transition-all duration-700 border-2 border-white/20 hover:border-blue-400/60 hover:scale-105 hover:shadow-2xl cultural-border">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-xl group-hover:shadow-2xl animate-breathe" style={{animationDelay: '0.5s'}}>
                        <BookOpen className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1 text-center">
                        <span className="text-2xl font-handwriting text-amber-100 block group-hover:text-white transition-colors duration-500 brush-text">
                          課程介紹
                        </span>
                        <p className="text-sm text-amber-200 opacity-80 group-hover:opacity-100 transition-opacity duration-500 font-light mt-1">
                          Courses
                        </p>
                      </div>
                    </div>
                  </Link>

                  {/* 學員見證 */}
                  <Link 
                    href="/testimonials" 
                    onClick={() => setIsMenuOpen(false)}
                    className="group block animate-menu-slide-in cultural-menu-item"
                    style={{animationDelay: '0.4s'}}
                  >
                    <div className="flex items-center justify-center space-x-6 p-6 rounded-3xl bg-gradient-to-r from-white/15 to-white/10 backdrop-blur-md hover:from-white/25 hover:to-white/15 transition-all duration-700 border-2 border-white/20 hover:border-green-400/60 hover:scale-105 hover:shadow-2xl cultural-border">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-xl group-hover:shadow-2xl animate-breathe" style={{animationDelay: '1s'}}>
                        <MessageCircle className="w-8 h-8 text-white" />
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
                </div>

                {/* 快速聯絡資訊 */}
                <div className="mt-12 animate-menu-slide-in" style={{animationDelay: '0.6s'}}>
                  <div className="text-center mb-6">
                    <h3 className="text-amber-300 text-xl font-handwriting mb-2">快速聯絡</h3>
                    <div className="w-16 h-0.5 bg-amber-400 mx-auto"></div>
                  </div>
                  <div className="space-y-4 max-w-sm mx-auto">
                    <div className="flex items-center justify-center space-x-4 p-4 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center animate-pulse-slow">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-center">
                        <p className="text-amber-100 text-lg font-handwriting">(02) 2388-5566</p>
                        <p className="text-amber-300 text-sm">週一至週五 09:00-18:00</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center space-x-4 p-4 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center animate-pulse-slow">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-center">
                        <p className="text-amber-100 text-lg font-handwriting">info@culturalguide.edu.tw</p>
                        <p className="text-amber-300 text-sm">24小時內回覆</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 裝飾性文化元素 */}
                <div className="text-center mt-12 animate-menu-slide-in" style={{animationDelay: '0.8s'}}>
                  <div className="flex justify-center space-x-8 mb-6">
                    <span className="text-3xl animate-float">📞</span>
                    <span className="text-3xl animate-float" style={{animationDelay: '0.5s'}}>💬</span>
                    <span className="text-3xl animate-float" style={{animationDelay: '1s'}}>📧</span>
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
              聯絡我們
            </h1>
            <div className="w-16 md:w-24 h-1 bg-amber-400 mx-auto mb-4 md:mb-6 animate-scale-in"></div>
            <p className="text-lg md:text-xl text-slate-200 leading-relaxed animate-fade-in-up px-4" style={{animationDelay: '0.2s'}}>
              有任何問題嗎？我們很樂意為您解答，讓我們一起開啟文化學習之旅
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-slate-800 mb-4 font-cultural scroll-animate">聯絡資訊</h2>
            <div className="w-12 md:w-16 h-1 bg-amber-500 mx-auto scroll-animate"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover-lift scroll-animate" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-amber-100 rounded-full flex items-center justify-center animate-pulse-slow">
                      {info.icon}
                    </div>
                  </div>
                  <CardTitle className="text-slate-800 text-lg md:text-xl">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-slate-800 mb-2 text-sm md:text-base">{info.content}</p>
                  <p className="text-xs md:text-sm text-slate-600">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      {/* Contact Form & Info - 重新設計 */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-br from-amber-50 to-slate-100">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-slate-800 mb-4 font-cultural scroll-animate">發送訊息</h2>
            <div className="w-12 md:w-16 h-1 bg-amber-500 mx-auto scroll-animate"></div>
            <p className="text-slate-600 mt-4 scroll-animate text-sm md:text-base">填寫表單，我們會盡快為您回覆</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
              {/* 主要聯絡表單 */}
              <div className="lg:col-span-2 scroll-animate">
                <Card className="border-0 shadow-2xl hover-lift overflow-hidden">
                  <div className="bg-gradient-to-r from-red-800 via-red-700 to-amber-600 p-1">
                    <div className="bg-white rounded-lg">
                      <CardHeader className="text-center p-6 md:p-8 bg-gradient-to-br from-amber-50 to-red-50">
                        <div className="text-4xl md:text-5xl mb-4 animate-float">🏛️</div>
                        <CardTitle className="text-2xl md:text-3xl text-red-900 mb-2 font-cultural">聯絡表單</CardTitle>
                        <CardDescription className="text-slate-600 text-sm md:text-base">
                          請詳細填寫以下資訊，我們會在24小時內回覆您
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-6 md:p-8">
                        {submitSuccess && (
                          <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-400 rounded-r-lg animate-scale-in">
                            <div className="flex items-center">
                              <div className="flex-shrink-0">
                                <CheckCircle className="w-6 h-6 text-green-400" />
                              </div>
                              <div className="ml-3">
                                <p className="text-green-800 font-medium">訊息發送成功！</p>
                                <p className="text-green-700 text-sm">我們已收到您的訊息，會在24小時內回覆您。</p>
                              </div>
                            </div>
                          </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="contact-form-item">
                              <Label htmlFor="name" className="text-red-800 font-semibold mb-2 block text-sm md:text-base flex items-center">
                                <span className="text-lg mr-2">👤</span>
                                姓名 <span className="text-red-500 ml-1">*</span>
                              </Label>
                              <Input
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                className="border-2 border-amber-200 focus:border-red-500 focus:ring-red-500 h-12 text-sm md:text-base bg-amber-50/50"
                                placeholder="請輸入您的姓名"
                              />
                            </div>
                            <div className="contact-form-item" style={{animationDelay: '0.1s'}}>
                              <Label htmlFor="email" className="text-red-800 font-semibold mb-2 block text-sm md:text-base flex items-center">
                                <span className="text-lg mr-2">📧</span>
                                電子郵件 <span className="text-red-500 ml-1">*</span>
                              </Label>
                              <Input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                className="border-2 border-amber-200 focus:border-red-500 focus:ring-red-500 h-12 text-sm md:text-base bg-amber-50/50"
                                placeholder="請輸入您的電子郵件"
                              />
                            </div>
                          </div>
                          
                          <div className="contact-form-item" style={{animationDelay: '0.2s'}}>
                            <Label htmlFor="subject" className="text-red-800 font-semibold mb-2 block text-sm md:text-base flex items-center">
                              <span className="text-lg mr-2">📝</span>
                              主題 <span className="text-red-500 ml-1">*</span>
                            </Label>
                            <Input
                              id="subject"
                              name="subject"
                              value={formData.subject}
                              onChange={handleInputChange}
                              required
                              className="border-2 border-amber-200 focus:border-red-500 focus:ring-red-500 h-12 text-sm md:text-base bg-amber-50/50"
                              placeholder="請輸入訊息主題"
                            />
                          </div>
                          
                          <div className="contact-form-item" style={{animationDelay: '0.3s'}}>
                            <Label htmlFor="message" className="text-red-800 font-semibold mb-2 block text-sm md:text-base flex items-center">
                              <span className="text-lg mr-2">💬</span>
                              訊息內容 <span className="text-red-500 ml-1">*</span>
                            </Label>
                            <Textarea
                              id="message"
                              name="message"
                              value={formData.message}
                              onChange={handleInputChange}
                              required
                              rows={6}
                              className="border-2 border-amber-200 focus:border-red-500 focus:ring-red-500 resize-none text-sm md:text-base bg-amber-50/50"
                              placeholder="請詳細描述您的問題或需求，我們會根據您的需求提供最適合的協助..."
                            />
                          </div>
                          
                          <div className="contact-form-item" style={{animationDelay: '0.4s'}}>
                            <Button 
                              type="submit" 
                              disabled={isSubmitting}
                              className="w-full bg-gradient-to-r from-red-800 to-amber-600 hover:from-red-900 hover:to-amber-700 text-amber-100 font-bold py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                            >
                              {isSubmitting ? (
                                <div className="flex items-center justify-center space-x-3">
                                  <div className="w-6 h-6 border-3 border-amber-100 border-t-transparent rounded-full animate-spin"></div>
                                  <span>發送中，請稍候...</span>
                                </div>
                              ) : (
                                <div className="flex items-center justify-center space-x-3">
                                  <Send className="w-6 h-6" />
                                  <span>發送訊息</span>
                                </div>
                              )}
                            </Button>
                          </div>
                        </form>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              </div>

              {/* 側邊資訊 */}
              <div className="space-y-6 scroll-animate">
                {/* 快速聯絡 */}
                <Card className="border-0 shadow-lg hover-lift cultural-card">
                  <CardHeader className="bg-gradient-to-r from-amber-100 to-red-100">
                    <CardTitle className="text-red-800 text-lg md:text-xl flex items-center">
                      <span className="text-2xl mr-2">📞</span>
                      快速聯絡
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3 p-3 bg-amber-50 rounded-lg border border-amber-200">
                        <Mail className="w-5 h-5 text-red-600" />
                        <div>
                          <p className="font-semibold text-red-800 text-sm">Email</p>
                          <p className="text-amber-700 text-xs">info@culturalguide.edu.tw</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-amber-50 rounded-lg border border-amber-200">
                        <Phone className="w-5 h-5 text-red-600" />
                        <div>
                          <p className="font-semibold text-red-800 text-sm">電話</p>
                          <p className="text-amber-700 text-xs">(02) 2388-5566</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* 服務時間 */}
                <Card className="border-0 shadow-lg hover-lift cultural-card">
                  <CardHeader className="bg-gradient-to-r from-amber-100 to-red-100">
                    <CardTitle className="text-red-800 text-lg md:text-xl flex items-center">
                      <span className="text-2xl mr-2">⏰</span>
                      服務時間
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4">
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between p-2 bg-amber-50 rounded">
                        <span className="text-red-700">週一至週五</span>
                        <span className="font-semibold text-red-800">09:00 - 18:00</span>
                      </div>
                      <div className="flex justify-between p-2 bg-amber-50 rounded">
                        <span className="text-red-700">週六</span>
                        <span className="font-semibold text-red-800">10:00 - 17:00</span>
                      </div>
                      <div className="flex justify-between p-2 bg-gray-50 rounded">
                        <span className="text-gray-600">週日</span>
                        <span className="text-gray-400">休息</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* 緊急聯絡 */}
                <Card className="border-0 shadow-lg hover-lift bg-gradient-to-br from-red-50 to-amber-50 border-2 border-amber-200">
                  <CardContent className="p-4">
                    <div className="text-center">
                      <div className="text-3xl mb-2 animate-pulse-slow">🆘</div>
                      <h4 className="font-semibold text-red-800 mb-2">緊急問題？</h4>
                      <p className="text-xs text-red-600 mb-3">透過LINE聯繫我們，我們會立即回覆</p>
                      <Button size="sm" className="bg-green-500 hover:bg-green-600 text-white shadow-lg">
                        LINE客服
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-slate-800 mb-4 font-cultural scroll-animate">常見問題</h2>
            <div className="w-12 md:w-16 h-1 bg-amber-500 mx-auto scroll-animate"></div>
            <p className="text-slate-600 mt-4 scroll-animate text-sm md:text-base">快速找到您需要的答案</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {faqCategories.map((category, index) => (
              <Card key={index} className="border-0 shadow-lg hover-lift scroll-animate" style={{animationDelay: `${index * 0.2}s`}}>
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-amber-100 rounded-full flex items-center justify-center">
                      {category.icon}
                    </div>
                  </div>
                  <CardTitle className="text-slate-800 text-lg md:text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.questions.map((question, qIndex) => (
                      <li key={qIndex} className="flex items-start space-x-2">
                        <HelpCircle className="w-3 h-3 md:w-4 md:h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-600 text-xs md:text-sm">{question}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full mt-4 border-amber-300 text-amber-700 hover:bg-amber-50 text-sm md:text-base">
                    查看更多
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-20 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-slate-800 mb-4 font-cultural scroll-animate">找到我們</h2>
            <div className="w-12 md:w-16 h-1 bg-amber-500 mx-auto scroll-animate"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
            {/* Map Placeholder */}
            <div className="scroll-animate">
              <Card className="border-0 shadow-lg overflow-hidden hover-lift">
                <div className="h-64 md:h-96 bg-gradient-to-br from-slate-200 to-amber-100 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 md:w-16 md:h-16 text-amber-600 mx-auto mb-4" />
                    <h3 className="text-lg md:text-xl font-semibold text-slate-800 mb-2">互動地圖</h3>
                    <p className="text-slate-600 text-sm md:text-base">台北市中正區重慶南路一段122號8樓</p>
                    <Button className="mt-4 professional-btn text-sm md:text-base">
                      在Google地圖中查看
                    </Button>
                  </div>
                </div>
              </Card>
            </div>

            {/* Location Info */}
            <div className="scroll-animate">
              <Card className="border-0 shadow-lg hover-lift">
                <CardHeader>
                  <CardTitle className="text-slate-800 text-lg md:text-xl">交通資訊</CardTitle>
                  <CardDescription className="text-sm md:text-base">多種交通方式，輕鬆到達</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 md:space-y-6">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3 text-sm md:text-base">🚇 捷運</h4>
                    <ul className="space-y-1 text-xs md:text-sm text-slate-600">
                      <li>• 板南線：善導寺站 1號出口，步行5分鐘</li>
                      <li>• 淡水信義線：台大醫院站 3號出口，步行8分鐘</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3 text-sm md:text-base">🚌 公車</h4>
                    <ul className="space-y-1 text-xs md:text-sm text-slate-600">
                      <li>• 15、18、74、208、214、236</li>
                      <li>• 站牌：重慶南路口站</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3 text-sm md:text-base">🚗 開車</h4>
                    <ul className="space-y-1 text-xs md:text-sm text-slate-600">
                      <li>• 附近有多個付費停車場</li>
                      <li>• 建議使用大眾運輸工具</li>
                    </ul>
                  </div>

                  <div className="bg-amber-50 p-3 md:p-4 rounded-lg">
                    <p className="text-xs md:text-sm text-amber-800">
                      <strong>溫馨提醒：</strong>首次來訪建議提前15分鐘到達，我們的服務人員會在1樓大廳迎接您。
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - 修正預約諮詢按鈕顏色 */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-br from-slate-800 via-slate-700 to-amber-800 cloud-pattern-bg">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto scroll-animate">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-white mb-4 md:mb-6">還有其他問題嗎？</h2>
            <p className="text-lg md:text-xl text-slate-200 mb-6 md:mb-8">
              我們的專業團隊隨時為您提供協助，讓我們一起開啟您的文化學習之旅
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold hover-lift w-full sm:w-auto">
                  立即報名課程
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-amber-400 text-amber-600 hover:bg-amber-400 hover:text-slate-900 hover-lift w-full sm:w-auto font-semibold">
                預約諮詢
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
