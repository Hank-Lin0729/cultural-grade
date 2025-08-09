'use client'

import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Star, ArrowLeft, ChevronLeft, ChevronRight, Quote, Award, Users, TrendingUp, Menu, X, MessageCircle, Phone } from 'lucide-react'
import Link from 'next/link'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()
export default function TestimonialsPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState('all')
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

  const testimonials = [
    {
      name: "王美玲",
      age: "45歲",
      role: "退休教師",
      category: "teacher",
      content: "透過這個培訓課程，我重新發現了台灣文化的美好。現在我能自信地帶領遊客探索我們的文化瑰寶。課程內容豐富，老師教學認真，讓我在退休後找到了新的人生方向。",
      rating: 5,
      image: "/middle-aged-woman-smiling.png",
      course: "台灣歷史文化概論",
      achievement: "已取得導覽師證照，目前在故宮博物院擔任志工導覽員"
    },
    {
      name: "陳志明",
      age: "32歲", 
      role: "文史工作者",
      category: "professional",
      content: "課程內容豐富且實用，線上考核制度很完善。拿到證照後，我的導覽工作更加專業。特別是導覽技巧的課程，讓我學會如何與不同年齡層的遊客互動。",
      rating: 5,
      image: "/young-professional-portrait.png",
      course: "導覽技巧與實務",
      achievement: "成功轉職為專業導覽師，月收入提升40%"
    },
    {
      name: "林雅婷",
      age: "28歲",
      role: "觀光業從業者", 
      category: "tourism",
      content: "老師們都很專業，教學方式生動有趣。現在我可以用更深度的方式介紹台灣文化。客人對我的導覽都給予很高的評價，工作成就感大大提升。",
      rating: 5,
      image: "/young-woman-tourism.png",
      course: "多元文化融合",
      achievement: "獲得公司最佳導覽員獎項，帶團評價提升至4.9分"
    },
    {
      name: "張文華",
      age: "38歲",
      role: "博物館員工",
      category: "museum",
      content: "這個課程讓我對台灣傳統建築有了更深入的了解。現在在博物館工作時，能夠更專業地為參觀者解說文物背後的故事和文化意涵。",
      rating: 5,
      image: "/museum-worker.png",
      course: "傳統建築與工藝",
      achievement: "升任博物館資深解說員，負責VIP團體導覽"
    },
    {
      name: "劉建國",
      age: "52歲",
      role: "退休公務員",
      category: "retiree",
      content: "退休後想要發揮所長，這個課程給了我很好的機會。現在我在社區擔任文化志工，用專業知識服務鄉親，生活變得更有意義。",
      rating: 5,
      image: "/retired-man-gardening.png",
      course: "台灣歷史文化概論",
      achievement: "成立社區文化導覽隊，服務超過500位民眾"
    },
    {
      name: "蔡淑芬",
      age: "35歲",
      role: "家庭主婦",
      category: "homemaker",
      content: "原本只是對文化有興趣，沒想到透過這個課程，我不僅學到了專業知識，還找到了新的職業方向。現在我是兼職導覽員，工作時間彈性又有成就感。",
      rating: 5,
      image: "/homemaker-woman.png",
      course: "導覽技巧與實務",
      achievement: "成為兼職導覽員，每月額外收入3萬元"
    }
  ]

  const categories = [
    { id: 'all', name: '全部見證', count: testimonials.length },
    { id: 'teacher', name: '教育工作者', count: testimonials.filter(t => t.category === 'teacher').length },
    { id: 'professional', name: '專業人士', count: testimonials.filter(t => t.category === 'professional').length },
    { id: 'tourism', name: '觀光從業者', count: testimonials.filter(t => t.category === 'tourism').length },
    { id: 'retiree', name: '退休人員', count: testimonials.filter(t => t.category === 'retiree').length }
  ]

  const stats = [
    {
      icon: <Users className="w-6 h-6 md:w-8 md:h-8 text-amber-600" />,
      number: "2,500+",
      label: "學員總數",
      description: "來自各行各業的學員"
    },
    {
      icon: <Award className="w-6 h-6 md:w-8 md:h-8 text-amber-600" />,
      number: "95%",
      label: "證照通過率",
      description: "高品質的教學成果"
    },
    {
      icon: <Star className="w-6 h-6 md:w-8 md:h-8 text-amber-600" />,
      number: "4.9",
      label: "課程滿意度",
      description: "學員真實評價"
    },
    {
      icon: <TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-amber-600" />,
      number: "85%",
      label: "就業成功率",
      description: "學員職涯發展"
    }
  ]

  const filteredTestimonials = selectedCategory === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.category === selectedCategory)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % filteredTestimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length)
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
              <div className="absolute top-16 left-12 text-6xl text-amber-400 opacity-40 animate-enhanced-float">⭐</div>
              <div className="absolute top-24 right-16 text-5xl text-red-400 opacity-35 animate-enhanced-float" style={{animationDelay: '1s'}}>💬</div>
              <div className="absolute bottom-40 left-8 text-5xl text-amber-400 opacity-45 animate-enhanced-float" style={{animationDelay: '2s'}}>👥</div>
              <div className="absolute bottom-20 right-12 text-6xl text-red-400 opacity-30 animate-enhanced-float" style={{animationDelay: '0.5s'}}>🏛️</div>
              <div className="absolute top-1/2 left-6 text-4xl text-amber-300 opacity-50 animate-enhanced-float" style={{animationDelay: '1.5s'}}>🎓</div>
              <div className="absolute top-1/3 right-4 text-5xl text-red-300 opacity-40 animate-enhanced-float" style={{animationDelay: '2.5s'}}>🌸</div>
            </div>
            
            {/* 固定頂部關閉按鈕 */}
            <div className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-6 pt-8 bg-gradient-to-b from-black/30 to-transparent backdrop-blur-sm">
              <div className="animate-ink-brush">
                <h1 className="text-2xl font-handwriting text-amber-100 tracking-wider">
                  學員見證
                </h1>
                <p className="text-amber-300 text-sm opacity-90 font-light">Student Testimonials</p>
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
                    <span className="text-6xl animate-rotate-scale">⭐</span>
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
                        <Users className="w-8 h-8 text-white" />
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

                  {/* 聯絡我們 */}
                  <Link 
                    href="/contact" 
                    onClick={() => setIsMenuOpen(false)}
                    className="group block animate-menu-slide-in cultural-menu-item"
                    style={{animationDelay: '0.4s'}}
                  >
                    <div className="flex items-center justify-center space-x-6 p-6 rounded-3xl bg-gradient-to-r from-white/15 to-white/10 backdrop-blur-md hover:from-white/25 hover:to-white/15 transition-all duration-700 border-2 border-white/20 hover:border-purple-400/60 hover:scale-105 hover:shadow-2xl cultural-border">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-xl group-hover:shadow-2xl animate-breathe" style={{animationDelay: '1s'}}>
                        <Phone className="w-8 h-8 text-white" />
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

                {/* 學員統計展示 */}
                <div className="mt-12 animate-menu-slide-in" style={{animationDelay: '0.6s'}}>
                  <div className="text-center mb-6">
                    <h3 className="text-amber-300 text-xl font-handwriting mb-2">學員成果</h3>
                    <div className="w-16 h-0.5 bg-amber-400 mx-auto"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
                    <div className="flex flex-col items-center p-4 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-3 animate-pulse-slow">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-sm text-amber-200 text-center font-handwriting">2,500+ 學員</span>
                    </div>
                    <div className="flex flex-col items-center p-4 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center mb-3 animate-pulse-slow">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-sm text-amber-200 text-center font-handwriting">95% 通過率</span>
                    </div>
                    <div className="flex flex-col items-center p-4 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-3 animate-pulse-slow">
                        <Star className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-sm text-amber-200 text-center font-handwriting">4.9 滿意度</span>
                    </div>
                    <div className="flex flex-col items-center p-4 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-3 animate-pulse-slow">
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-sm text-amber-200 text-center font-handwriting">85% 就業率</span>
                    </div>
                  </div>
                </div>

                {/* 裝飾性文化元素 */}
                <div className="text-center mt-12 animate-menu-slide-in" style={{animationDelay: '0.8s'}}>
                  <div className="flex justify-center space-x-8 mb-6">
                    <span className="text-3xl animate-float">⭐</span>
                    <span className="text-3xl animate-float" style={{animationDelay: '0.5s'}}>💬</span>
                    <span className="text-3xl animate-float" style={{animationDelay: '1s'}}>👥</span>
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
              學員見證
            </h1>
            <div className="w-16 md:w-24 h-1 bg-amber-400 mx-auto mb-4 md:mb-6 animate-scale-in"></div>
            <p className="text-lg md:text-xl text-slate-200 leading-relaxed animate-fade-in-up px-4" style={{animationDelay: '0.2s'}}>
              聽聽我們學員的真實分享，見證文化導覽師培訓的成果
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center scroll-animate" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="flex justify-center mb-3 md:mb-4">
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-slate-800 mb-1 md:mb-2">{stat.number}</div>
                <div className="text-base md:text-lg font-semibold text-slate-700 mb-1">{stat.label}</div>
                <div className="text-xs md:text-sm text-slate-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 md:py-8 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 scroll-animate">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setSelectedCategory(category.id)
                  setCurrentTestimonial(0)
                }}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-full transition-all duration-300 hover-lift text-sm md:text-base ${
                  selectedCategory === category.id
                    ? 'bg-amber-500 text-white shadow-lg'
                    : 'bg-white text-slate-700 hover:bg-amber-50 border border-slate-200'
                }`}
              >
                {category.name}
                <Badge variant="secondary" className="ml-2 bg-slate-100 text-slate-600 text-xs">
                  {category.count}
                </Badge>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-br from-amber-50 to-slate-100">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto scroll-animate">
            <Card className="border-0 shadow-2xl hover-lift overflow-hidden">
              <div className="bg-gradient-to-r from-amber-500 to-slate-700 p-1">
                <div className="bg-white rounded-lg">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-8">
                      <div className="flex-shrink-0">
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

<img 
  src={
    filteredTestimonials[currentTestimonial]?.image 
      || `${publicRuntimeConfig?.basePath || ''}/placeholder.svg`
  }
  alt={filteredTestimonials[currentTestimonial]?.name || "Testimonial"}
  className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-amber-400 animate-pulse-slow"
/>

                      </div>
                      <div className="flex-1 text-center lg:text-left">
                        <div className="flex justify-center lg:justify-start mb-4">
                          <Quote className="w-10 h-10 md:w-12 md:h-12 text-amber-400" />
                        </div>
                        <div className="flex justify-center lg:justify-start mb-4">
                          {[...Array(filteredTestimonials[currentTestimonial]?.rating || 5)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 md:w-6 md:h-6 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                        <p className="text-lg md:text-xl text-slate-700 mb-4 md:mb-6 italic leading-relaxed">
                          "{filteredTestimonials[currentTestimonial]?.content}"
                        </p>
                        <div className="space-y-3">
                          <div className="text-slate-800">
                            <p className="font-semibold text-lg md:text-xl">{filteredTestimonials[currentTestimonial]?.name}</p>
                            <p className="text-slate-600">{filteredTestimonials[currentTestimonial]?.age} • {filteredTestimonials[currentTestimonial]?.role}</p>
                          </div>
                          <div className="space-y-2">
                            <Badge className="bg-amber-100 text-amber-800 text-xs md:text-sm">
                              主修課程：{filteredTestimonials[currentTestimonial]?.course}
                            </Badge>
                            <p className="text-xs md:text-sm text-slate-600 bg-slate-50 p-3 rounded-lg">
                              <strong>學習成果：</strong>{filteredTestimonials[currentTestimonial]?.achievement}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </div>
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
                {filteredTestimonials.map((_, index) => (
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
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-slate-800 mb-4 font-cultural scroll-animate">更多學員分享</h2>
            <div className="w-12 md:w-16 h-1 bg-amber-500 mx-auto scroll-animate"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredTestimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg hover-lift scroll-animate" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader className="text-center">
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

<img 
  src={
    testimonial.image 
      || `${publicRuntimeConfig?.basePath || ''}/placeholder.svg`
  }
  alt={testimonial.name || "Testimonial"}
  className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-4 border-amber-400 mx-auto mb-4"
/>

                  <div className="flex justify-center mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <CardTitle className="text-slate-800 text-lg md:text-xl">{testimonial.name}</CardTitle>
                  <CardDescription className="text-sm md:text-base">{testimonial.age} • {testimonial.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-xs md:text-sm mb-4 line-clamp-4">
                    "{testimonial.content}"
                  </p>
                  <div className="space-y-2">
                    <Badge variant="outline" className="border-amber-300 text-amber-700 text-xs">
                      {testimonial.course}
                    </Badge>
                    <p className="text-xs text-slate-500 bg-slate-50 p-2 rounded">
                      {testimonial.achievement}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-br from-slate-800 to-amber-800">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto scroll-animate">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-white mb-4 md:mb-6">您也想成為下一個成功案例嗎？</h2>
            <p className="text-lg md:text-xl text-slate-200 mb-6 md:mb-8">
              加入我們的專業培訓課程，開啟您的文化導覽師之路
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold hover-lift w-full sm:w-auto">
                  立即報名
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white text-black hover:bg-white hover:text-slate-800 hover-lift w-full sm:w-auto">
                  了解更多
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
