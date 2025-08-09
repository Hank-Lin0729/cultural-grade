'use client'

import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { MapPin, Users, Award, BookOpen, Star, ChevronLeft, ChevronRight, Menu, X, Home, GraduationCap, BadgeIcon as Certificate, MessageCircle, Phone, Mail, MapPinIcon, Send, Facebook, Instagram, MessageSquare, Clock, User } from 'lucide-react'
import Link from 'next/link'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()
export default function HomePage() {
const [currentTestimonial, setCurrentTestimonial] = useState(0)
const [isMenuOpen, setIsMenuOpen] = useState(false)
const [formData, setFormData] = useState({
  name: '',
  email: '',
  subject: '',
  message: ''
})
const [isSubmitting, setIsSubmitting] = useState(false)
const [submitSuccess, setSubmitSuccess] = useState(false)

const [isLoading, setIsLoading] = useState(true)
const [showContent, setShowContent] = useState(false)

useEffect(() => {
  // 進入動畫序列
  const timer1 = setTimeout(() => {
    setIsLoading(false)
  }, 2500)
  
  const timer2 = setTimeout(() => {
    setShowContent(true)
  }, 3000)

  return () => {
    clearTimeout(timer1)
    clearTimeout(timer2)
  }
}, [])

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

const testimonials = [
  {
    name: "王美玲",
    age: "45歲",
    role: "退休教師",
    content: "透過這個培訓課程，我重新發現了台灣文化的美好。現在我能自信地帶領遊客探索我們的文化瑰寶。",
    rating: 5,
    image: "/middle-aged-woman-smiling.png"
  },
  {
    name: "陳志明",
    age: "32歲", 
    role: "文史工作者",
    content: "課程內容豐富且實用，線上考核制度很完善。拿到證照後，我的導覽工作更加專業。",
    rating: 5,
    image: "/young-professional-portrait.png"
  },
  {
    name: "林雅婷",
    age: "28歲",
    role: "觀光業從業者", 
    content: "老師們都很專業，教學方式生動有趣。現在我可以用更深度的方式介紹台灣文化。",
    rating: 5,
    image: "/young-woman-tourism.png"
  }
]

const courses = [
  {
    title: "台灣歷史文化概論",
    description: "從史前時代到現代，全面了解台灣的歷史脈絡",
    icon: "🏛️",
    duration: "8小時"
  },
  {
    title: "傳統建築與工藝",
    description: "深入探討台灣傳統建築特色與民間工藝",
    icon: "🏮",
    duration: "6小時"
  },
  {
    title: "導覽技巧與實務",
    description: "專業導覽技巧訓練與實地演練",
    icon: "🎭",
    duration: "10小時"
  },
  {
    title: "多元文化融合",
    description: "認識台灣多元族群文化的交融與發展",
    icon: "🌏",
    duration: "4小時"
  }
]

const contactInfo = [
  {
    icon: <Mail className="w-5 h-5 md:w-6 md:h-6 text-amber-600" />,
    title: "電子郵件",
    content: "info@culturalguide.edu.tw",
    description: "24小時內回覆"
  },
  {
    icon: <Phone className="w-5 h-5 md:w-6 md:h-6 text-amber-600" />,
    title: "聯絡電話",
    content: "(02) 2388-5566",
    description: "週一至週五 09:00-18:00"
  },
  {
    icon: <MapPin className="w-5 h-5 md:w-6 md:h-6 text-amber-600" />,
    title: "辦公地址",
    content: "台北市中正區重慶南路一段122號8樓",
    description: "歡迎預約參觀"
  },
  {
    icon: <Clock className="w-5 h-5 md:w-6 md:h-6 text-amber-600" />,
    title: "服務時間",
    content: "週一至週五 09:00-18:00",
    description: "週六 10:00-17:00"
  }
]

const nextTestimonial = () => {
  setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
}

const prevTestimonial = () => {
  setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
}

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

return (
  <>
    {/* 文化風格進入動畫 */}
    <div className={`fixed inset-0 z-50 transition-all duration-1000 ${isLoading ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-red-900 via-red-800 to-amber-900">
        <div className="absolute inset-0 bg-[url('/traditional-chinese-pattern.png')] bg-cover bg-center opacity-20"></div>
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6">
          {/* 主要動畫元素 */}
          <div className="text-center">
            {/* 文化圖標動畫 */}
            <div className="mb-8">
              <div className="text-8xl md:text-9xl animate-bounce" style={{animationDuration: '2s'}}>
                🏛️
              </div>
            </div>
            
            {/* 標題動畫 */}
            <div className="mb-6">
              <h1 className="text-4xl md:text-6xl font-light text-amber-100 mb-4 tracking-wider font-cultural typewriter">
                文化導覽師學院
              </h1>
              <div className="w-32 h-1 bg-amber-400 mx-auto animate-pulse"></div>
            </div>
            
            {/* 副標題動畫 */}
            <p className="text-lg md:text-xl text-slate-200 mb-8 animate-fade-in-up" style={{animationDelay: '1s'}}>
              傳承文化 • 專業導覽
            </p>
            
            {/* 載入指示器 */}
            <div className="flex items-center justify-center space-x-2 animate-fade-in-up" style={{animationDelay: '1.5s'}}>
              <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
              <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
            </div>
          </div>
          
          {/* 裝飾元素 */}
          <div className="absolute top-10 left-10 text-4xl text-amber-400 opacity-30 animate-float">
            🎭
          </div>
          <div className="absolute top-20 right-16 text-3xl text-amber-400 opacity-30 animate-float" style={{animationDelay: '1s'}}>
            📚
          </div>
          <div className="absolute bottom-20 left-20 text-3xl text-amber-400 opacity-30 animate-float" style={{animationDelay: '2s'}}>
            🏮
          </div>
          <div className="absolute bottom-16 right-10 text-4xl text-amber-400 opacity-30 animate-float" style={{animationDelay: '0.5s'}}>
            🌏
          </div>
        </div>
      </div>
    </div>

    {/* 主要內容 */}
    <div className={`transition-all duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-amber-50">
        {/* Navigation */}
        <nav className="bg-white/95 backdrop-blur-sm text-slate-800 sticky top-0 z-50 shadow-sm border-b border-slate-200">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center h-14 md:h-16">
              <div className="flex items-center">
                <span className="text-lg md:text-2xl font-light tracking-wide text-slate-800 gradient-text-animate">
                  文化導覽師學院
                </span>
              </div>
              
              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-8">
                <Link href="/courses-info" className="text-slate-600 hover:text-amber-600 transition-colors font-medium hover-lift">課程介紹</Link>
                <Link href="/testimonials" className="text-slate-600 hover:text-amber-600 transition-colors font-medium hover-lift">學員見證</Link>
                <Link href="/contact" className="text-slate-600 hover:text-amber-600 transition-colors font-medium hover-lift">聯絡我們</Link>
                <div className="flex space-x-3">
                  <Link href="/login">
                    <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50 professional-btn-outline hover-lift">
                      登入
                    </Button>
                  </Link>
                  <Link href="/register">
                    <Button className="professional-btn hover-lift">
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

          {/* Mobile Menu - 全新文化風格全螢幕設計 */}
          <div className={`md:hidden fixed inset-0 z-[100] transition-all duration-1000 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
            {/* 完全遮蓋的背景層 */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-950 via-red-900 to-amber-900 cultural-menu-bg">
              {/* 文化紋樣背景 */}
              <div className="absolute inset-0 bg-[url('/traditional-chinese-pattern.png')] bg-cover bg-center opacity-25 animate-cultural-glow"></div>
              
              {/* 動態文化元素 - 增強版 */}
              <div className="absolute inset-0 overflow-hidden">
                {/* 主要浮動元素 */}
                <div className="absolute top-16 left-12 text-6xl text-amber-400 opacity-40 animate-enhanced-float">🏛️</div>
                <div className="absolute top-24 right-16 text-5xl text-red-400 opacity-35 animate-enhanced-float" style={{animationDelay: '1s'}}>🎭</div>
                <div className="absolute bottom-40 left-8 text-5xl text-amber-400 opacity-45 animate-enhanced-float" style={{animationDelay: '2s'}}>🏮</div>
                <div className="absolute bottom-20 right-12 text-6xl text-red-400 opacity-30 animate-enhanced-float" style={{animationDelay: '0.5s'}}>📚</div>
                <div className="absolute top-1/2 left-6 text-4xl text-amber-300 opacity-50 animate-enhanced-float" style={{animationDelay: '1.5s'}}>⭐</div>
                <div className="absolute top-1/3 right-4 text-5xl text-red-300 opacity-40 animate-enhanced-float" style={{animationDelay: '2.5s'}}>🌸</div>
                
                {/* 粒子效果增強 */}
                <div className="absolute top-20 left-20 w-3 h-3 bg-amber-400 rounded-full animate-ping opacity-70"></div>
                <div className="absolute top-40 right-24 w-2 h-2 bg-red-400 rounded-full animate-pulse opacity-60" style={{animationDelay: '1s'}}></div>
                <div className="absolute bottom-60 left-32 w-4 h-4 bg-amber-300 rounded-full animate-bounce opacity-50" style={{animationDelay: '2s'}}></div>
                <div className="absolute bottom-32 right-16 w-3 h-3 bg-red-300 rounded-full animate-ping opacity-80" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute top-2/3 left-8 w-2 h-2 bg-amber-500 rounded-full animate-pulse opacity-90" style={{animationDelay: '1.5s'}}></div>
                <div className="absolute top-1/4 right-8 w-3 h-3 bg-red-500 rounded-full animate-bounce opacity-60" style={{animationDelay: '3s'}}></div>
              </div>
              
              {/* 固定頂部關閉按鈕 */}
              <div className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-6 pt-8 bg-gradient-to-b from-black/30 to-transparent backdrop-blur-sm">
                <div className="animate-ink-brush">
                  <h1 className="text-2xl font-handwriting text-amber-100 tracking-wider">
                    文化導覽師學院
                  </h1>
                  <p className="text-amber-300 text-sm opacity-90 font-light">Cultural Guide Academy</p>
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
                      <span className="text-6xl animate-rotate-scale">🏛️</span>
                    </div>
                    <h2 className="text-4xl font-handwriting text-amber-100 tracking-wider mb-4">
                      選單
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto"></div>
                  </div>

                  {/* 主選單項目 - 垂直居中排列 */}
                  <div className="space-y-6 max-w-md mx-auto w-full">
                    {/* 首頁 */}
                    <Link 
                      href="/" 
                      onClick={() => setIsMenuOpen(false)}
                      className="group block animate-menu-slide-in cultural-menu-item"
                    >
                      <div className="flex items-center justify-center space-x-6 p-6 rounded-3xl bg-gradient-to-r from-white/15 to-white/10 backdrop-blur-md hover:from-white/25 hover:to-white/15 transition-all duration-700 border-2 border-white/20 hover:border-amber-400/60 hover:scale-105 hover:shadow-2xl cultural-border">
                        <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-xl group-hover:shadow-2xl animate-breathe">
                          <Home className="w-8 h-8 text-white" />
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
                      style={{animationDelay: '0.6s'}}
                    >
                      <div className="flex items-center justify-center space-x-6 p-6 rounded-3xl bg-gradient-to-r from-white/15 to-white/10 backdrop-blur-md hover:from-white/25 hover:to-white/15 transition-all duration-700 border-2 border-white/20 hover:border-purple-400/60 hover:scale-105 hover:shadow-2xl cultural-border">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-xl group-hover:shadow-2xl animate-breathe" style={{animationDelay: '1.5s'}}>
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

                  {/* 裝飾性文化元素 */}
                  <div className="text-center mt-12 animate-menu-slide-in" style={{animationDelay: '0.8s'}}>
                    <div className="flex justify-center space-x-8 mb-6">
                      <span className="text-3xl animate-float">🎭</span>
                      <span className="text-3xl animate-float" style={{animationDelay: '0.5s'}}>🏮</span>
                      <span className="text-3xl animate-float" style={{animationDelay: '1s'}}>📚</span>
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
                          <User className="w-6 h-6 mr-3" />
                          會員登入
                        </Button>
                      </Link>
                      <Link href="/register" onClick={() => setIsMenuOpen(false)}>
                        <Button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-red-900 py-4 text-xl font-handwriting rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 animate-cultural-glow">
                          <Award className="w-6 h-6 mr-3" />
                          立即註冊
                        </Button>
                      </Link>
                    </div>
                    
                    {/* 底部標語和裝飾 */}
                    <div className="text-center mt-8 pt-6 border-t border-white/10 animate-menu-slide-in" style={{animationDelay: '1.2s'}}>
                      <p className="text-amber-200 text-base font-handwriting tracking-wider mb-3">傳承文化 • 專業導覽</p>
                      <div className="flex justify-center space-x-2">
                        <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                        <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative py-20 md:py-32 px-4 text-center cultural-gradient cloud-pattern-bg">
          <div className="absolute inset-0 bg-[url('/traditional-chinese-temple.png')] bg-cover bg-center opacity-10"></div>
          <div className="relative z-10 container mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6 md:space-y-8">
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-light text-white mb-4 tracking-wide font-cultural animate-fade-in-up">
                  文化導覽師
                </h1>
                <div className="w-16 md:w-24 h-1 bg-amber-400 mx-auto animate-scale-in"></div>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-amber-100 tracking-wider animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                  專業培訓認證平台
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed animate-fade-in-up px-4" style={{animationDelay: '0.4s'}}>
                  深度學習台灣文化精髓，獲得專業認證，開啟文化傳承之路
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 md:mt-12 animate-fade-in-up px-4" style={{animationDelay: '0.6s'}}>
                <Link href="/register">
                  <Button size="lg" className="professional-btn text-base md:text-lg px-6 md:px-8 py-3 md:py-4 elegant-shadow hover-lift w-full sm:w-auto">
                    立即報名
                  </Button>
                </Link>
                <Link href="/courses-info">
                  <Button size="lg" variant="outline" className="professional-btn-outline text-base md:text-lg px-6 md:px-8 py-3 md:py-4 border-2 border-white text-white hover:bg-white hover:text-slate-800 hover-lift w-full sm:w-auto">
                    了解課程
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-16 md:py-20 px-4 bg-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-slate-800 mb-4 font-cultural scroll-animate">我們的理念</h2>
            <div className="w-12 md:w-16 h-1 bg-amber-500 mx-auto mb-8 md:mb-12 scroll-animate"></div>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-12 md:mb-16 font-light scroll-animate px-4">
                文化是民族的靈魂，導覽是文化的橋樑。我們致力於培養專業的文化導覽師，
                讓每一位學員都能成為文化傳承的使者，用專業的知識和熱忱的態度，
                向世界展現台灣豐富多元的文化底蘊。
              </p>
              <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                <div className="text-center group scroll-animate">
                  <div className="w-16 md:w-20 h-16 md:h-20 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 animate-float">
                    <span className="text-2xl md:text-3xl text-white">🎯</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-medium text-slate-800 mb-3 md:mb-4">專業培訓</h3>
                  <p className="text-slate-600 leading-relaxed px-2">系統性的課程設計，全方位提升導覽技能</p>
                </div>
                <div className="text-center group scroll-animate" style={{animationDelay: '0.2s'}}>
                  <div className="w-16 md:w-20 h-16 md:h-20 bg-gradient-to-br from-slate-600 to-slate-800 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 animate-float" style={{animationDelay: '1s'}}>
                    <span className="text-2xl md:text-3xl text-white">🤝</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-medium text-slate-800 mb-3 md:mb-4">文化傳承</h3>
                  <p className="text-slate-600 leading-relaxed px-2">深度挖掘文化內涵，傳承珍貴的文化資產</p>
                </div>
                <div className="text-center group scroll-animate" style={{animationDelay: '0.4s'}}>
                  <div className="w-16 md:w-20 h-16 md:h-20 bg-gradient-to-br from-amber-500 to-slate-700 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 animate-float" style={{animationDelay: '2s'}}>
                    <span className="text-2xl md:text-3xl text-white">🌟</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-medium text-slate-800 mb-3 md:mb-4">專業認證</h3>
                  <p className="text-slate-600 leading-relaxed px-2">權威的證照制度，提升職業競爭力</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Course Features */}
        <section id="courses" className="py-16 md:py-20 px-4 bg-gradient-to-b from-slate-50 to-white">
          <div className="container mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-slate-800 mb-4 font-cultural scroll-animate">課程特色</h2>
              <div className="w-12 md:w-16 h-1 bg-amber-500 mx-auto scroll-animate"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {courses.map((course, index) => (
                <Card key={index} className="cultural-card border-0 elegant-shadow group hover-lift card-3d scroll-animate" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardHeader className="text-center pb-4">
                    <div className="text-4xl md:text-5xl mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 animate-pulse-slow">
                      {course.icon}
                    </div>
                    <CardTitle className="text-slate-800 text-lg md:text-xl mb-3 px-2">{course.title}</CardTitle>
                    <Badge variant="secondary" className="bg-amber-100 text-amber-800 font-medium">
                      {course.duration}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-600 text-center leading-relaxed text-sm md:text-base px-2">
                      {course.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12 md:mt-16 scroll-animate">
              <Link href="/register">
                <Button size="lg" className="professional-btn elegant-shadow hover-lift">
                  查看完整課程內容
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-16 md:py-20 px-4 bg-gradient-to-br from-amber-50 to-slate-100">
          <div className="container mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-slate-800 mb-4 font-cultural scroll-animate">學員見證</h2>
              <div className="w-12 md:w-16 h-1 bg-amber-500 mx-auto scroll-animate"></div>
            </div>
            <div className="max-w-4xl mx-auto scroll-animate">
              <Card className="border-0 shadow-2xl hover-lift">
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row items-center gap-6">
<img
  src={
    testimonials[currentTestimonial].image
      || `${publicRuntimeConfig.basePath}/placeholder.svg?height=96&width=96`
  }
  alt={testimonials[currentTestimonial].name}
  className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-4 border-amber-400 animate-pulse-slow"
/>

                    <div className="flex-1 text-center md:text-left">
                      <div className="flex justify-center md:justify-start mb-3">
                        {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 md:w-6 md:h-6 fill-amber-400 text-amber-400 animate-pulse-slow" style={{animationDelay: `${i * 0.1}s`}} />
                        ))}
                      </div>
                      <p className="text-lg md:text-xl text-slate-700 mb-4 md:mb-6 italic leading-relaxed">
                        "{testimonials[currentTestimonial].content}"
                      </p>
                      <div className="text-slate-800">
                        <p className="font-semibold text-lg">{testimonials[currentTestimonial].name}</p>
                        <p className="text-slate-600">{testimonials[currentTestimonial].age} • {testimonials[currentTestimonial].role}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div className="flex justify-center items-center mt-6 md:mt-8 space-x-4 md:space-x-6">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={prevTestimonial}
                  className="border-amber-400 text-amber-700 hover:bg-amber-100 hover-lift"
                >
                  <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
                </Button>
                <div className="flex space-x-2 md:space-x-3">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 hover-lift ${
                        index === currentTestimonial ? 'bg-amber-600 scale-125' : 'bg-amber-300'
                      }`}
                    />
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={nextTestimonial}
                  className="border-amber-400 text-amber-700 hover:bg-amber-100 hover-lift"
                >
                  <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                </Button>
              </div>
            </div>
            <div className="text-center mt-12 scroll-animate">
              <Link href="/testimonials">
                <Button size="lg" variant="outline" className="professional-btn-outline hover-lift text-black">
                  了解更多
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Latest News */}
        <section className="py-16 md:py-20 px-4 bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-slate-800 mb-4 font-cultural scroll-animate">最新消息</h2>
              <div className="w-12 md:w-16 h-1 bg-amber-500 mx-auto scroll-animate"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <Card className="border-l-4 border-l-red-500 hover-lift scroll-animate">
                <CardHeader>
                  <Badge className="w-fit bg-red-100 text-red-800">重要公告</Badge>
                  <CardTitle className="text-slate-800 text-lg md:text-xl">2024年春季班開始報名</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm md:text-base">春季班課程即將開始，名額有限，請把握機會報名參加。</p>
                  <p className="text-sm text-slate-500 mt-2">2024/02/15</p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-amber-500 hover-lift scroll-animate" style={{animationDelay: '0.2s'}}>
                <CardHeader>
                  <Badge className="w-fit bg-amber-100 text-amber-800">課程更新</Badge>
                  <CardTitle className="text-slate-800 text-lg md:text-xl">新增VR實境導覽課程</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm md:text-base">結合最新科技，提供更豐富的導覽體驗學習。</p>
                  <p className="text-sm text-slate-500 mt-2">2024/02/10</p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-green-500 hover-lift scroll-animate" style={{animationDelay: '0.4s'}}>
                <CardHeader>
                  <Badge className="w-fit bg-green-100 text-green-800">成果分享</Badge>
                  <CardTitle className="text-slate-800 text-lg md:text-xl">學員導覽影片競賽</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm md:text-base">優秀學員作品展示，歡迎觀摩學習。</p>
                  <p className="text-sm text-slate-500 mt-2">2024/02/05</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section - 全新RWD設計 */}
        <section className="py-16 md:py-20 px-4 bg-gradient-to-br from-slate-800 via-slate-700 to-amber-800 wave-bg">
          <div className="container mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-4 font-cultural scroll-animate">聯絡我們</h2>
              <div className="w-16 md:w-24 h-1 bg-amber-400 mx-auto mb-4 md:mb-6 scroll-animate"></div>
              <p className="text-lg md:text-xl text-slate-200 scroll-animate">有任何問題嗎？我們很樂意為您解答</p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
                {/* 聯絡表單 */}
                <div className="scroll-animate">
                  <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-sm hover-lift">
                    <CardHeader className="text-center pb-4">
                      <CardTitle className="text-2xl md:text-3xl text-slate-800 mb-2">發送訊息</CardTitle>
                      <CardDescription className="text-slate-600 text-sm md:text-base">
                        填寫表單，我們會在24小時內回覆您
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-6 md:p-8">
                      {submitSuccess && (
                        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg animate-scale-in">
                          <p className="text-green-800 text-center font-medium">✅ 訊息已成功發送！我們會盡快回覆您。</p>
                        </div>
                      )}

                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="name" className="text-slate-700 font-medium mb-2 block">
                              姓名
                            </Label>
                            <Input
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                              className="border-slate-300 focus:border-amber-500 focus:ring-amber-500 h-12"
                              placeholder="請輸入您的姓名"
                            />
                          </div>
                          <div>
                            <Label htmlFor="email" className="text-slate-700 font-medium mb-2 block">
                              電子郵件 <span className="text-red-500">*</span>
                            </Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              className="border-slate-300 focus:border-amber-500 focus:ring-amber-500 h-12"
                              placeholder="請輸入您的電子郵件"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <Label htmlFor="subject" className="text-slate-700 font-medium mb-2 block">
                            主題
                          </Label>
                          <Input
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            required
                            className="border-slate-300 focus:border-amber-500 focus:ring-amber-500 h-12"
                            placeholder="請輸入訊息主題"
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="message" className="text-slate-700 font-medium mb-2 block">
                            訊息內容
                          </Label>
                          <Textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            rows={5}
                            className="border-slate-300 focus:border-amber-500 focus:ring-amber-500 resize-none"
                            placeholder="請輸入您想要詢問的內容..."
                          />
                        </div>
                        
                        <Button 
                          type="submit" 
                          disabled={isSubmitting}
                          className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                          {isSubmitting ? (
                            <div className="flex items-center justify-center space-x-2">
                              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                              <span>發送中...</span>
                            </div>
                          ) : (
                            <div className="flex items-center justify-center space-x-2">
                              <Send className="w-5 h-5" />
                              <span>發送訊息</span>
                            </div>
                          )}
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>

                {/* 聯絡資訊與社群媒體 */}
                <div className="space-y-6 scroll-animate">
                  {/* 聯絡資訊 */}
                  <Card className="border-0 shadow-xl bg-white/10 backdrop-blur-sm hover-lift">
                    <CardHeader>
                      <CardTitle className="text-white text-xl md:text-2xl">聯絡資訊</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {contactInfo.map((info, index) => (
                        <div key={index} className="flex items-center space-x-4 p-3 bg-white/10 rounded-lg">
                          <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center animate-pulse-slow">
                            {info.icon}
                          </div>
                          <div>
                            <p className="text-white font-semibold text-sm md:text-base">{info.title}</p>
                            <p className="text-amber-200 text-xs md:text-sm">{info.content}</p>
                            <p className="text-slate-300 text-xs">{info.description}</p>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  {/* 社群媒體 */}
                  <Card className="border-0 shadow-xl bg-white/10 backdrop-blur-sm hover-lift">
                    <CardHeader>
                      <CardTitle className="text-white text-xl md:text-2xl">追蹤我們</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center space-x-4 p-3 bg-white/10 rounded-lg hover-lift">
                        <div className="social-btn w-12 h-12 rounded-full flex items-center justify-center">
                          <Facebook className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="text-white font-semibold">Facebook</p>
                          <p className="text-amber-200 text-sm">@CulturalGuideAcademy</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 p-3 bg-white/10 rounded-lg hover-lift">
                        <div className="social-btn w-12 h-12 rounded-full flex items-center justify-center">
                          <Instagram className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="text-white font-semibold">Instagram</p>
                          <p className="text-amber-200 text-sm">@cultural_guide_tw</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 p-3 bg-white/10 rounded-lg hover-lift">
                        <div className="social-btn w-12 h-12 rounded-full flex items-center justify-center">
                          <MessageSquare className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="text-white font-semibold">LINE</p>
                          <p className="text-amber-200 text-sm">@culturalguide</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center mt-16 scroll-animate">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto hover-lift">
                <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">準備開始您的文化導覽師之路了嗎？</h3>
                <p className="text-slate-200 mb-6 text-lg">加入我們，成為專業的文化傳承者</p>
                <Link href="/register">
                  <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-8 py-4 text-lg hover-lift shadow-lg">
                    立即報名
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Footer - RWD優化 */}
        <footer className="bg-slate-900 text-slate-300 py-8 md:py-12 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
              {/* 品牌區域 */}
              <div className="md:col-span-2 text-center md:text-left scroll-animate">
                <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center animate-pulse-slow">
                    <span className="text-lg md:text-2xl text-white">📚</span>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-2xl font-light text-white tracking-wide">文化導覽師學院</h3>
                    <p className="text-amber-400 text-xs md:text-sm">Cultural Guide Academy</p>
                  </div>
                </div>
                <p className="text-slate-400 leading-relaxed mb-4 text-sm md:text-base">
                  致力於培養專業的文化導覽師，傳承台灣豐富的文化底蘊，
                  讓每一位學員都能成為文化傳承的使者。
                </p>
                <div className="flex justify-center md:justify-start space-x-4">
                  <button className="social-btn w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center hover-lift">
                    <Facebook className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </button>
                  <button className="social-btn w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center hover-lift">
                    <Instagram className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </button>
                  <button className="social-btn w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center hover-lift">
                    <MessageSquare className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </button>
                </div>
              </div>

              {/* 快速連結 */}
              <div className="text-center md:text-left scroll-animate" style={{animationDelay: '0.2s'}}>
                <h4 className="text-base md:text-lg font-semibold text-white mb-3 md:mb-4">快速連結</h4>
                <ul className="space-y-2 text-sm md:text-base">
                  <li><Link href="/courses-info" className="hover:text-amber-400 transition-colors hover-lift">課程介紹</Link></li>
                  <li><Link href="/testimonials" className="hover:text-amber-400 transition-colors hover-lift">學員見證</Link></li>
                  <li><Link href="/login" className="hover:text-amber-400 transition-colors hover-lift">會員登入</Link></li>
                  <li><Link href="/register" className="hover:text-amber-400 transition-colors hover-lift">立即註冊</Link></li>
                </ul>
              </div>

              {/* 聯絡資訊 */}
              <div className="text-center md:text-left scroll-animate" style={{animationDelay: '0.4s'}}>
                <h4 className="text-base md:text-lg font-semibold text-white mb-3 md:mb-4">聯絡資訊</h4>
                <ul className="space-y-2 text-xs md:text-sm">
                  <li className="flex items-center justify-center md:justify-start space-x-2">
                    <Mail className="w-3 h-3 md:w-4 md:h-4 text-amber-400" />
                    <span>info@culturalguide.edu.tw</span>
                  </li>
                  <li className="flex items-center justify-center md:justify-start space-x-2">
                    <Phone className="w-3 h-3 md:w-4 md:h-4 text-amber-400" />
                    <span>(02) 2388-5566</span>
                  </li>
                  <li className="flex items-center justify-center md:justify-start space-x-2">
                    <MapPinIcon className="w-3 h-3 md:w-4 md:h-4 text-amber-400" />
                    <span className="text-center md:text-left">台北市中正區重慶南路一段122號8樓</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 版權資訊 */}
            <div className="border-t border-slate-700 pt-6 md:pt-8 text-center scroll-animate">
              <p className="text-slate-400 text-xs md:text-sm">
                © 2024 文化導覽師學院 Cultural Guide Academy. All rights reserved.
              </p>
              <p className="text-slate-500 text-xs mt-2">
                傳承文化，專業導覽 | 讓文化成為永恆的橋樑
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  </>
)
}
