import React, { useState } from 'react';
import {
  Menu, X, Globe, Sparkles, GraduationCap, BarChart3,
  BookOpen, Plane, Building2, Users, Leaf, Settings,
  Layers, Heart, Mail, Search, PencilRuler, Rocket,
  RefreshCw, ArrowRight, Send, CheckCircle2
} from 'lucide-react';

export default function EcoLangAI() {
  const [lang, setLang] = useState('en');
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '', org: '', email: '', interest: '', needs: ''
  });

  const t = (en, zh) => (lang === 'en' ? en : zh);

  const nav = [
    { id: 'home', en: 'Home', zh: '首頁' },
    { id: 'about', en: 'About', zh: '關於我們' },
    { id: 'services', en: 'Services', zh: '服務範疇' },
    { id: 'solutions', en: 'Solutions', zh: '解決方案' },
    { id: 'process', en: 'Process', zh: '合作流程' },
    { id: 'contact', en: 'Contact', zh: '聯絡我們' },
  ];

  const scrollTo = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      icon: Sparkles,
      en: 'AI-Powered Language and Communication Training Systems',
      zh: 'AI 驅動語言與溝通訓練系統',
    },
    {
      icon: BarChart3,
      en: 'Assessment Systems',
      zh: '評估系統',
    },
    {
      icon: BookOpen,
      en: 'Chinese and English Language Tutoring',
      zh: '中文及英文語言輔導',
    },
    {
      icon: Plane,
      en: 'Study Abroad Consulting Services',
      zh: '留學顧問服務',
    },
  ];

  const whyChoose = [
    { icon: Leaf, en: 'Green AI-driven solutions focused on the local needs of educators', zh: '綠色 AI 驅動，聚焦教育者在地需求' },
    { icon: Settings, en: 'Customized solutions instead of one-size-fits-all services', zh: '提供定制化解決方案，而非標準化服務' },
    { icon: GraduationCap, en: 'Expertise in language education, communication training, and assessment', zh: '具備語言教育、溝通訓練及評估專業' },
    { icon: Layers, en: 'Integration of technology, language tutoring, and education consulting', zh: '整合科技、語言輔導與教育諮詢' },
    { icon: Heart, en: 'Support for families and individual learners', zh: '支援家庭及個人學習者' },
  ];

  const whoWeServe = [
    { en: 'Schools and universities', zh: '學校及大學' },
    { en: 'Corporate training departments', zh: '企業培訓部門' },
    { en: 'HR and talent development teams', zh: '人力資源與人才發展團隊' },
    { en: 'Families planning international education', zh: '規劃國際教育的家庭' },
    { en: 'Students and families preparing for overseas study', zh: '準備留學的學生及家庭' },
    { en: 'Individual learners seeking language tutoring', zh: '尋求語文輔導的個人學習者' },
    { en: 'Professionals looking to improve workplace communication skills', zh: '希望提升職場溝通能力的專業人士' },
  ];

  const process = [
    {
      icon: Search,
      en: 'Needs Analysis', zh: '需求分析',
      dEn: 'Understand your goals, learners, assessment needs, communication contexts, and consulting needs',
      dZh: '了解目標、學習者、評估需求、溝通場景及諮詢需求',
    },
    {
      icon: PencilRuler,
      en: 'Solution Design', zh: '方案設計',
      dEn: 'Design customized AI systems, training plans, tutoring programs, or consulting services',
      dZh: '設計定制化 AI 系統、訓練方案、輔導課程或諮詢服務',
    },
    {
      icon: Rocket,
      en: 'Development and Delivery', zh: '開發與服務交付',
      dEn: 'Develop AI-powered tools, deliver tutoring, provide training, or support study abroad planning',
      dZh: '開發 AI 工具、提供語言輔導、進行溝通訓練或支援留學規劃',
    },
    {
      icon: RefreshCw,
      en: 'Feedback and Optimization', zh: '回饋與優化',
      dEn: 'Provide feedback, track progress, review outcomes, and continuously improve learning support',
      dZh: '提供回饋、追蹤進度、檢視成果，並持續優化學習支援',
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      {/* Navigation */}
      <header className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => scrollTo('home')}
              className="flex items-center gap-2 group"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-green-700 to-green-800 flex items-center justify-center text-white shadow-md">
                <Leaf className="w-5 h-5" />
              </div>
              <span className="font-bold text-lg tracking-tight text-slate-900">
                EcoLang <span className="text-orange-500">AI</span>
              </span>
            </button>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1">
              {nav.map((n) => (
                <button
                  key={n.id}
                  onClick={() => scrollTo(n.id)}
                  className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-green-700 hover:bg-green-50 rounded-lg transition-colors"
                >
                  {t(n.en, n.zh)}
                </button>
              ))}
              <button
                onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
                className="ml-2 flex items-center gap-1.5 px-3 py-2 text-sm font-semibold text-green-800 border border-green-300 rounded-lg hover:bg-green-50 transition-colors"
              >
                <Globe className="w-4 h-4" />
                {lang === 'en' ? '繁中' : 'EN'}
              </button>
            </nav>

            {/* Mobile controls */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
                className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold text-green-800 border border-green-300 rounded-lg"
              >
                <Globe className="w-3.5 h-3.5" />
                {lang === 'en' ? '繁中' : 'EN'}
              </button>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg"
              >
                {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <nav className="md:hidden bg-white border-t border-slate-200 px-4 py-2">
            {nav.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className="block w-full text-left px-3 py-3 text-sm font-medium text-slate-700 hover:bg-green-50 hover:text-green-700 rounded-lg transition-colors"
              >
                {t(n.en, n.zh)}
              </button>
            ))}
          </nav>
        )}
      </header>

      {/* Hero / Home */}
      <section id="home" className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-orange-50" />
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-green-200 rounded-full blur-3xl opacity-40" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-orange-200 rounded-full blur-3xl opacity-40" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/70 border border-green-200 rounded-full text-green-800 text-xs font-semibold mb-6">
              <Sparkles className="w-4 h-4 text-orange-500" />
              EcoLang AI
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mb-6 italic">
              {t(
                'AI-Powered Language and Communication Training, Assessment, and Education Consulting',
                'AI 驅動語言與溝通訓練、評估及教育諮詢服務'
              )}
            </h1>
            <ul className="space-y-3 text-base sm:text-lg text-slate-600 mb-8">
              {[
                { en: 'Customized AI-powered language and communication training and assessment systems for educational institutions, families, and individual learners', zh: '為教育機構、家庭及個人學習者提供定制化 AI 驅動語言與溝通訓練及評估系統' },
                { en: 'Supporting learning improvement through adaptive feedback and data-informed insights', zh: '透過自適應回饋及數據化洞察，支援學習成效提升' },
                { en: 'Chinese and English language tutoring', zh: '中文及英文語言輔導' },
                { en: 'Study abroad consulting services', zh: '留學顧問服務' },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-1" />
                  <span>{t(item.en, item.zh)}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white font-semibold rounded-xl shadow-lg shadow-orange-500/25 hover:bg-orange-600 transition-colors"
              >
                {t('Get in Touch', '聯絡我們')}
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollTo('services')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-green-800 font-semibold rounded-xl border border-green-300 hover:border-green-500 hover:bg-green-50 transition-colors"
              >
                {t('Explore Services', '瀏覽服務')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeader
            label={t('About', '關於我們')}
            title={t('About Us', '關於我們')}
          />
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            {[
              { en: 'AI-powered education technology and consulting company', zh: 'AI 驅動教育科技與諮詢公司' },
              { en: 'Focused on language learning, communication training, assessment, and education consulting', zh: '專注語言學習、溝通訓練、學習評估及教育諮詢' },
              { en: 'Providing customized AI systems, tutoring services, and study abroad guidance', zh: '提供定制化 AI 系統、語言輔導及留學規劃指導' },
              { en: 'Serving educational institutions, families, and individual learners', zh: '服務教育機構、家庭及個人學習者' },
              { en: 'Combining AI technology, language education, assessment expertise, and personalized consulting', zh: '結合 AI 技術、語言教育、評估專業及個人化諮詢服務' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-5 bg-green-50 rounded-2xl border border-green-100">
                <div className="w-8 h-8 rounded-lg bg-orange-500 text-white flex items-center justify-center font-bold text-sm shrink-0">
                  {i + 1}
                </div>
                <p className="text-slate-700 leading-relaxed">{t(item.en, item.zh)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeader
            label={t('Services', '服務範疇')}
            title={t('Our Services', '服務範疇')}
          />
          <div className="grid sm:grid-cols-2 gap-6 mt-10">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={i}
                  className="group p-6 bg-white rounded-2xl border border-slate-200 hover:border-green-400 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-700 to-green-800 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-lg text-slate-900">
                    {t(s.en, s.zh)}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeader
            label={t('Solutions', '解決方案')}
            title={t('Customized Solutions for Different Learning Needs', '面向不同學習需求的定制化解決方案')}
          />
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            <SolutionCard
              icon={Building2}
              title={t('For Educational Institutions', '教育機構')}
              items={[
                { en: 'AI language learning platforms', zh: 'AI 語言學習平台' },
                { en: 'Language and communication training and assessment tools', zh: '語言與溝通訓練及評估工具' },
                { en: 'Student progress tracking', zh: '學生進度追蹤' },
              ]}
              t={t}
            />
            <SolutionCard
              icon={Users}
              title={t('For Families and Individual Learners', '家庭及個人學習者')}
              items={[
                { en: 'Parent-child communication training', zh: '親子溝通訓練' },
                { en: 'Study abroad preparation', zh: '留學準備' },
                { en: 'Interview coaching', zh: '面試輔導' },
                { en: 'Personalized learning support', zh: '個人化學習支援' },
              ]}
              t={t}
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-green-700 to-green-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 bg-orange-500 rounded-full text-xs font-semibold mb-4">
              {t('Why Choose Us', '為何選擇我們')}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold italic">
              {t('Why Choose Us', '為何選擇我們')}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyChoose.map((w, i) => {
              const Icon = w.icon;
              return (
                <div key={i} className="p-6 bg-white/10 backdrop-blur rounded-2xl border border-white/20 hover:bg-white/15 transition-colors">
                  <Icon className="w-8 h-8 mb-3 text-orange-300" />
                  <p className="font-medium leading-relaxed">{t(w.en, w.zh)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeader
            label={t('Who We Serve', '適用對象')}
            title={t('Who We Serve', '適用對象')}
          />
          <div className="flex flex-wrap gap-3 mt-10 justify-center">
            {whoWeServe.map((w, i) => (
              <div
                key={i}
                className="inline-flex items-center gap-2 px-5 py-3 bg-green-50 border border-green-200 rounded-full hover:border-orange-400 hover:bg-orange-50 transition-colors"
              >
                <CheckCircle2 className="w-4 h-4 text-orange-500" />
                <span className="text-sm font-medium text-slate-700">{t(w.en, w.zh)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeader
            label={t('Process', '合作流程')}
            title={t('How We Work', '合作流程')}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {process.map((p, i) => {
              const Icon = p.icon;
              return (
                <div key={i} className="relative p-6 bg-white rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow">
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm font-bold shadow-md">
                    {i + 1}
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-green-100 text-green-700 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-lg text-slate-900 mb-2">{t(p.en, p.zh)}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{t(p.dEn, p.dZh)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-green-800 to-green-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <Rocket className="w-12 h-12 mx-auto mb-6 text-orange-400" />
          <h2 className="text-2xl sm:text-4xl font-bold mb-6 italic">
            {t('Start Your AI-Powered Learning Journey', '開啟您的 AI 驅動學習旅程')}
          </h2>
          <a
            href="mailto:ecolangai@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white font-semibold rounded-xl shadow-lg hover:bg-orange-600 transition-colors"
          >
            <Mail className="w-5 h-5" />
            ecolangai@gmail.com
          </a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeader
            label={t('Contact', '聯絡我們')}
            title={t('Contact Us', '聯絡我們')}
          />
          <div className="grid md:grid-cols-2 gap-10 mt-10">
            {/* Info */}
            <div>
              <p className="text-lg text-slate-700 mb-6">
                {t(
                  'Interested in AI-powered language training, assessment, or education consulting?',
                  '有興趣了解 AI 驅動語言訓練、評估或教育諮詢？'
                )}
              </p>
              <p className="font-semibold text-slate-900 mb-3">
                {t('Contact us for:', '歡迎聯絡我們了解：')}
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  { en: 'Customized AI systems', zh: '定制化 AI 系統' },
                  { en: 'Language and communication training', zh: '語言與溝通訓練' },
                  { en: 'Assessment solutions', zh: '評估解決方案' },
                  { en: 'Chinese and English tutoring', zh: '中文及英文輔導' },
                  { en: 'Study abroad consulting', zh: '留學顧問服務' },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                    {t(item.en, item.zh)}
                  </li>
                ))}
              </ul>
              <a
                href="mailto:ecolangai@gmail.com"
                className="inline-flex items-center gap-2 text-green-700 font-semibold hover:text-green-800"
              >
                <Mail className="w-5 h-5" />
                ecolangai@gmail.com
              </a>
            </div>

            {/* Form */}
            <div className="p-6 sm:p-8 bg-green-50 rounded-2xl border border-green-200">
              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle2 className="w-16 h-16 text-orange-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {t('Thank You!', '感謝您！')}
                  </h3>
                  <p className="text-slate-600">
                    {t(
                      'We have received your message and will get back to you soon.',
                      '我們已收到您的訊息，將盡快與您聯絡。'
                    )}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Field
                    label={t('Name', '姓名')}
                    value={form.name}
                    onChange={(v) => setForm({ ...form, name: v })}
                  />
                  <Field
                    label={t('Organization / Individual', '機構 / 個人')}
                    value={form.org}
                    onChange={(v) => setForm({ ...form, org: v })}
                  />
                  <Field
                    label={t('Email', '電郵')}
                    type="email"
                    value={form.email}
                    onChange={(v) => setForm({ ...form, email: v })}
                  />
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      {t('Area of Interest', '感興趣的服務範疇')}
                    </label>
                    <select
                      value={form.interest}
                      onChange={(e) => setForm({ ...form, interest: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none text-slate-700"
                    >
                      <option value="">{t('Please select...', '請選擇...')}</option>
                      <option>{t('Customized AI systems', '定制化 AI 系統')}</option>
                      <option>{t('Language and communication training', '語言與溝通訓練')}</option>
                      <option>{t('Assessment solutions', '評估解決方案')}</option>
                      <option>{t('Chinese and English tutoring', '中文及英文輔導')}</option>
                      <option>{t('Study abroad consulting', '留學顧問服務')}</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      {t('Project or Learning Needs', '項目或學習需求')}
                    </label>
                    <textarea
                      rows={4}
                      value={form.needs}
                      onChange={(e) => setForm({ ...form, needs: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none text-slate-700 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-lg shadow-orange-500/25 hover:bg-orange-600 transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    {t('Submit', '提交')}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-950 text-green-100 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-600 to-green-700 flex items-center justify-center text-white">
                  <Leaf className="w-4 h-4" />
                </div>
                <span className="font-bold text-lg text-white">
                  EcoLang <span className="text-orange-400">AI</span>
                </span>
              </div>
              <p className="text-sm max-w-md leading-relaxed text-green-200">
                {t(
                  'AI-Powered Language and Communication Training, Assessment, and Education Consulting',
                  'AI 驅動語言與溝通訓練、評估及教育諮詢服務'
                )}
              </p>
              <p className="text-sm mt-2 text-green-300">
                {t(
                  'Customized AI systems, language tutoring, and study abroad consulting',
                  '定制化 AI 系統、語言輔導及留學顧問服務'
                )}
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">{t('Contact', '聯絡')}</h4>
              <a
                href="mailto:ecolangai@gmail.com"
                className="inline-flex items-center gap-2 text-sm text-orange-400 hover:text-orange-300"
              >
                <Mail className="w-4 h-4" />
                ecolangai@gmail.com
              </a>
            </div>
          </div>
          <div className="border-t border-green-900 mt-8 pt-6 text-center text-sm text-green-400">
            ©️ {new Date().getFullYear()} EcoLang AI. {t('All rights reserved.', '版權所有。')}
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionHeader({ label, title }) {
  return (
    <div className="text-center">
      <div className="inline-block px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-semibold mb-4">
        {label}
      </div>
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 italic max-w-3xl mx-auto">
        {title}
      </h2>
    </div>
  );
}

function SolutionCard({ icon: Icon, title, items, t }) {
  return (
    <div className="p-6 sm:p-8 bg-green-50 rounded-2xl border border-green-200">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-700 to-green-800 flex items-center justify-center text-white">
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="font-bold text-xl text-slate-900">{title}</h3>
      </div>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <ArrowRight className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
            <span className="text-slate-700">{t(item.en, item.zh)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Field({ label, value, onChange, type = 'text' }) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-700 mb-1.5">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none text-slate-700"
      />
    </div>
  );
}
