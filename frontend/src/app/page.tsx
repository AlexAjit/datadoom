'use client'

import React, { useState } from 'react';
// import Button from '@/components/ui/button';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Database, Lock, Star, Menu, X, CheckCircle, Send } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import DashboardPreview from '@/components/layout/DashboardPreview';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Handle form submission
    setEmail('');
    setMessage('');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm border-b z-50">
        <nav className="container mx-auto flex items-center justify-between h-16 px-4">
          <div className="flex items-center gap-2">
            <Database className="h-6 w-6 text-blue-600" />
            <span className="font-bold text-xl">DashDoom</span>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-4">
            <Button variant="ghost" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button className="group" asChild>
              <Link href="/signup">
                Get Started 
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-b">
            <div className="container mx-auto px-4 py-4 space-y-2">
              <Button variant="ghost" className="w-full justify-start" asChild>
                <Link href="/login">Login</Link>
              </Button>
              <Button className="w-full justify-start group" asChild>
                <Link href="/signup">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1 pt-16">
        {/* Hero Section with Dashboard Animation */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-bold tracking-tight mb-6">
              Powerful Analytics for
              <span className="text-blue-600"> Modern Teams</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Transform your data into actionable insights. Monitor, analyze, and optimize 
              your business performance in real-time.
            </p>
            <div className="flex gap-4 justify-center mb-12">
              <Button className="group" asChild>
                <Link href="/signup">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/demo">Watch Demo</Link>
              </Button>
            </div>
            <div className="relative mx-auto max-w-4xl p-4 bg-white rounded-lg">
               <DashboardPreview />
            </div>
          </div>
        </section>

        {/* Animated Feature Cards */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Lock className="h-6 w-6 text-blue-600" />,
                  title: "Secure Analytics",
                  description: "Enterprise-grade security with end-to-end encryption"
                },
                {
                  icon: <Star className="h-6 w-6 text-blue-600" />,
                  title: "Real-time Insights",
                  description: "Get instant updates and live monitoring capabilities"
                },
                {
                  icon: <CheckCircle className="h-6 w-6 text-blue-600" />,
                  title: "Custom Reports",
                  description: "Create tailored reports with drag-and-drop builder"
                }
              ].map((feature, index) => (
                <Card 
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <CardContent className="p-6">
                    <div className="mb-4 transform group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Simplified Footer with Contact Form */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Database className="h-8 w-8 text-blue-500" />
                <span className="font-bold text-2xl text-white">DashDoom</span>
              </div>
              <p className="text-gray-400">
                Transform your business with powerful analytics and real-time insights.
              </p>
            </div>
            
            <Card className="bg-white/5 border-0">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-xl font-semibold text-white mb-4">Get in Touch</h3>
                  <Input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  />
                  <Textarea
                    placeholder="Your message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  />
                  <Button type="submit" className="w-full group">
                    Send Message
                    <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes slide {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .animate-slide {
          animation: slide 20s linear infinite;
        }
      `}</style>
    </div>
  );
}