# 🎨 LOBO TUFTING - COMPREHENSIVE REDESIGN & IMPLEMENTATION PLAN

**Date:** April 13, 2026  
**Status:** Ready for Implementation  
**Scope:** Complete website redesign with modern layout, video integration, and smooth animations

---

## 📊 CURRENT MEDIA INVENTORY

### Images
- **Total:** 54 high-quality images
- **Square (1.0 ratio):** 25 images → Perfect for gallery grids
- **Portrait (0.75-0.95 ratio):** 20 images → Hero sections, product cards
- **Wide (1.05+):** 4 images → Full-width banners, section headers
- **Logo Files:** 3 (logo-main.webp, logo-white.webp, logo2.webp)

### Videos (Instagram Reels)
- **Total:** 5 professional reels
- **Format:** MP4
- **Use Case:** Embedded in website as autoplay sections, testimonials/process videos

---

## 🎯 OVERALL DESIGN STRATEGY

### Vision
Create a **modern, premium** portfolio-driven website that:
- ✅ Showcases tufted rugs as art pieces
- ✅ Integrates video content for process/testimonials
- ✅ Uses smooth, elegant animations (NO grayscale hover)
- ✅ Maintains visual hierarchy with consistent color scheme
- ✅ Adapts beautifully to all screen sizes

### Color Palette (Unchanged)
```
Primary: #74C63D (LOBO Green) - Premium & energy
Secondary: #000000 (Black) - Luxury & elegance
Accents: #FFFFFF (White) - Clean, modern
Backgrounds: #0B0F0B (Deep Black) - Rich depth
```

---

## 🏗️ RESTRUCTURED PAGE LAYOUTS

### 1. HOME PAGE (Hero → Feature → Process → Gallery → CTA)

#### Section A: Hero + Background Video
```
┌─────────────────────────────────────────────┐
│                                               │
│    LOBO TUFTING INTRO (Animated Text)       │
│    "Art You Can Walk On"                    │
│    [Subtitle + CTA Buttons]                 │
│                                               │
│    (Background: Subtle moving video or     │
│     parallax image with overlay)            │
│                                               │
└─────────────────────────────────────────────┘

Animations:
- Text slides in from bottom (staggered)
- Buttons scale up with bounce effect
- Background has subtle parallax (y-offset)
```

#### Section B: Featured Showcase (Video + Text)
```
┌─────────────────────────────────────────────┐
│  LEFT: Instagram Reel #1 (Looping)    RIGHT │
│  (With play button overlay)        : Text   │
│                                   :  "See   │
│  Video shows process/craft        :  How   │
│                                   :  We    │
│                                   :  Create│
│                                   :  Magic"│
│                                   :        │
│                                   :  [CTA] │
└─────────────────────────────────────────────┘

Animations:
- Video slides in from left (ease-out)
- Text fades in from right
- Play icon animates on hover
```

#### Section C: "The Process" (3-Step Cards + Images)
```
┌──────────┬──────────┬──────────┐
│ Step 1   │ Step 2   │ Step 3   │
│ Design   │ Material │ Craft    │
│          │          │          │
│ [Card]   │ [Card]   │ [Card]   │
│          │          │          │
└──────────┴──────────┴──────────┘

With Images Above Each Card:
- Square images (1.0 ratio)
- Rounded corners with shadow
- Hover effect: slight lift + shadow increase

Animations:
- Cards fade in on scroll (staggered from left → right)
- Images scale smoothly on hover
- No grayscale filter (always vibrant!)
```

#### Section D: Featured Works Showcase (Grid Preview)
```
┌─────────────────────────────────────────────┐
│  "RECENT CREATIONS"                         │
├─────────────────────────────────────────────┤
│  [Img1]  [Img2]  [Img3]  [Img4]             │
│  [Img5]  [Img6]  [Img7]  [Img8]             │
│  [Img9]  [Img10] [Img11] [Img12]            │
│                                               │
│  ["View All Gallery →"]                    │
└─────────────────────────────────────────────┘

Images: Square (1.0 ratio) in masonry grid
Animations:
- Each image slides in from different direction
- Slight color shift on hover (brightness +10%)
- Smooth scale transform (1 → 1.03)
```

#### Section E: Stats + Video Testimonials
```
┌─────────────────────┬──────────────────────┐
│ Stats Column:       │ Testimonial Reel:    │
│ ✓ 200+ Rugs        │ Instagram Reel #2    │
│ ✓ 100% Handmade    │ (Auto-play on scroll)│
│ ✓ 5+ Years         │                      │
│ ✓ Kerala Crafted   │ [Text overlay below] │
└─────────────────────┴──────────────────────┘

Animations:
- Stats count up on scroll
- Video fades in as section comes into view
```

#### Section F: Call-to-Action Banner
```
┌─────────────────────────────────────────────┐
│                                               │
│  "Ready for Your Custom Rug?"               │
│  [Primary CTA] [Secondary CTA]              │
│                                               │
│  (Background: Subtle gradient or           │
│   small video loop with reduced opacity)   │
│                                               │
└─────────────────────────────────────────────┘
```

---

### 2. GALLERY PAGE (Clean Masonry + Video Integration)

#### Layout:
```
┌─────────────────────────────────────────────┐
│ "TUFTED ARCHIVES"                           │
│ Gallery of all creations                    │
├─────────────────────────────────────────────┤
│ [Filter Buttons]                            │
│ All | Premium | Anime | Custom | Modern    │
├─────────────────────────────────────────────┤
│ [Grid of 54 Images + 5 Video Cards]         │
│                                               │
│ Layout: 4-column responsive grid            │
│ (3 on tablet, 2 on mobile)                  │
│                                               │
│ Video Cards: Special styling with:          │
│ - Play icon in center                       │
│ - Light overlay                             │
│ - Hover effect: scale + glow                │
│                                               │
│ Image Cards:                                │
│ - Rounded corners                           │
│ - Hover: slight scale (1 → 1.05)           │
│ - Hover: shadow increase                    │
│ - NO grayscale!                             │
│                                               │
└─────────────────────────────────────────────┘

Animations:
- Images slide in on scroll (staggered grid reveal)
- Hover effects: smooth scale + shadow
- Filter buttons: smooth transition between states
```

---

### 3. SHOP PAGE (Product Cards + Video Demo)

#### Hero Section:
```
┌─────────────────────────────────────────────┐
│ Featured Product Image (Square, 1.0)        │
│ + Rotating Product Showcase                 │
│ (Large image with small thumbnails below)   │
│                                               │
│ Animations:                                 │
│ - Image slides in on load                   │
│ - Smooth fade between products              │
└─────────────────────────────────────────────┘
```

#### Product Cards Grid:
```
┌──────────────┬──────────────┬──────────────┐
│ [Product 1]  │ [Product 2]  │ [Product 3]  │
│ Image        │ Image        │ Image        │
│ Name         │ Name         │ Name         │
│ Price        │ Price        │ Price        │
│ [Add to Cart]│ [Add to Cart]│ [Add to Cart]│
└──────────────┴──────────────┴──────────────┘

Images: Square (1.0 ratio)
Animations:
- Cards fade in on scroll
- Hover: image slightly lifts
- Hover: text becomes visible/highlighted
```

#### Video Demo Section:
```
Insert Instagram Reel #3 here showing
product showcase or process
```

---

### 4. ABOUT PAGE (Story + Process Video + Team)

#### Hero Section:
```
┌─────────────────────────────────────────────┐
│ "THE LOBO STORY"                            │
│ Subheading                                  │
│                                               │
│ (Background: Wide image or video loop)      │
└─────────────────────────────────────────────┘
```

#### Content Section:
```
┌──────────────────────┬──────────────────────┐
│ LEFT: Story Text     │ RIGHT: Process Reel  │
│ (Fade in on scroll)  │ (Video loops)        │
│                      │                      │
│ Paragraphs with      │ Instagram Reel #4    │
│ smooth animations    │ Shows process        │
└──────────────────────┴──────────────────────┘
```

#### Stats Section:
```
┌─────────────────────────────────────────────┐
│ Counters with Grid Images                   │
│                                               │
│ 200+ | 100% | 5+ | ∞                       │
│ Rugs | Hand  | Years| Passion              │
│      | made |      |                        │
│                                               │
│ With small square images beneath each       │
└─────────────────────────────────────────────┘
```

---

### 5. WORKSHOP PAGE (Class Preview + Video)

#### Hero Section:
```
┌─────────────────────────────────────────────┐
│ "JOIN OUR WORKSHOPS"                        │
│ Learn the art of tufting                    │
│                                               │
│ Background: Workshop photos or video        │
└─────────────────────────────────────────────┘
```

#### Workshop Cards:
```
┌──────────────┬──────────────┬──────────────┐
│ Workshop 1   │ Workshop 2   │ Workshop 3   │
│ [Date]       │ [Date]       │ [Date]       │
│ [Image]      │ [Image]      │ [Image]      │
│ [Details]    │ [Details]    │ [Details]    │
│ [Book Button]│ [Book Button]│ [Book Button]│
└──────────────┴──────────────┴──────────────┘

Images: Square (1.0 ratio)
Animations:
- Cards slide in from bottom on scroll
```

#### Video Section:
```
"SEE THE MAGIC HAPPEN"
Instagram Reel #5 embedded here
(Process/tufting demo)
```

---

### 6. CUSTOM ORDER PAGE (Form + Inspiration Gallery)

#### Layout:
```
┌────────────────────────────────────────────┐
│ LEFT: Order Form                RIGHT: Grid│
│ (Sticky on desktop)            of 9 recent│
│ - Design preferences           inspiring  │
│ - Size selector                images     │
│ - Color picker                 (Square)   │
│ - Material options                        │
│ [Submit Button]                           │
│                                            │
│                                            │
│ Mobile: Stacked layout                    │
└────────────────────────────────────────────┘
```

---

## 🎬 VIDEO INTEGRATION STRATEGY

### Where Videos Go:
1. **Home - Section B:** Instagram Reel #1 (Process/Showcase)
2. **Home - Section E:** Instagram Reel #2 (Testimonial/Quick wins)
3. **Shop Page:** Instagram Reel #3 (Product Demo)
4. **About Page:** Instagram Reel #4 (Process Deep Dive)
5. **Workshop Page:** Instagram Reel #5 (Tufting Demo)

### Video Styling:
```css
/* Video Container */
- Rounded corners (16px)
- Aspect ratio: 9:16 (vertical reels)
- Max-width: 400px
- Shadow: drop-shadow with green tint on hover
- Border: 2px solid #74C63D on hover

/* Video Player */
- Auto-loop
- Muted (sound icon on hover)
- Play button overlay
- HQ settings
```

### Video Animations:
```
On Scroll Into View:
- Fade in (opacity 0 → 1)
- Scale up slightly (0.95 → 1)
- Duration: 0.8s
- Delay: staggered if multiple videos

On Hover:
- Border color: #74C63D
- Shadow intensity: increase
- Scale: 1 → 1.02
```

---

## 🎨 ANIMATION SPECIFICATIONS (NO GRAYSCALE!)

### General Rules:
✅ All images display in **FULL COLOR** at all times  
✅ Hover effects use: scale, shadow, brightness, color overlay  
✅ Transitions: 0.3-0.6s smooth easing  
✅ Scroll animations: triggered at 80% viewport entry  

### Animation Types:

#### 1. **Fade-In on Scroll**
```javascript
Duration: 0.8s
Distance: 60px (from below)
Ease: power3.out
Delay: staggered (0.12s between items)
```

#### 2. **Scale on Hover**
```javascript
Scale: 1 → 1.05 (5% zoom)
Duration: 0.4s
Ease: power2.out
```

#### 3. **Parallax Background**
```javascript
Speed: 0.5 (half scroll speed)
Effect: Y-offset based on scroll position
Smooth scrub: 0.6s
```

#### 4. **Brightness/Color Overlay on Hover**
```javascript
From: brightness(100%) 
To: brightness(110%) + color-overlay(#74C63D, 0.1)
Duration: 0.4s
Smoothness: ease-in-out
```

#### 5. **Shadow Enhancement**
```javascript
Idle: box-shadow: 0 20px 40px rgba(0,0,0,0.3)
Hover: box-shadow: 0 40px 80px rgba(116,198,61,0.2)
Duration: 0.3s
```

#### 6. **Count-Up on Scroll** (Stats)
```javascript
Start: 0
End: Target number (200, 100%, etc.)
Duration: 2s
Ease: power2.out
Triggered on scroll into view
```

#### 7. **Staggered Grid Reveal**
```javascript
Grid items slide in from different directions:
- Even indices: from left
- Odd indices: from right
Duration: 0.8s each
Stagger: 0.12s between items
```

---

## 🛠️ TECHNICAL IMPLEMENTATION

### Animation Library:
**GSAP with ScrollTrigger** (already installed)
- Reason: GPU-optimized, smooth performance
- No need for Framer Motion
- Already configured in codebase

### Hooks to Create:
1. `useScrollFadeIn()` - Fade in on scroll
2. `useHoverScale()` - Scale on hover
3. `useParallaxEffect()` - Parallax backgrounds
4. `useBrightnessHover()` - Brightness/color overlay
5. `useCountUpScroll()` - Count-up animations
6. `useVideoAutoPlay()` - Video scroll-to-play

### Components to Create:
1. `VideoCard.tsx` - Reusable video player component
2. `ImageCard.tsx` - Image with hover effects
3. `ProductCard.tsx` - Product showcase card
4. `StatsCounter.tsx` - Animated stats
5. `AnimatedGrid.tsx` - Grid with staggered animations

---

## 🖼️ IMAGE PLACEMENT SUMMARY

| Page | Section | Count | Aspect Ratio | Style |
|------|---------|-------|--------------|-------|
| Home | Hero Background | 1 | 0.8-0.95 | Parallax, 40% opacity overlay |
| Home | Process Cards | 3 | 1.0 | Square, rounded, hover lift |
| Home | Featured Grid | 12 | 1.0 | Masonry, staggered reveal |
| Gallery | Main Grid | 54 | Mixed | 4-column grid, all colors |
| Gallery | Video Cards | 5 | Vertical | Play overlay, glow on hover |
| Shop | Product Cards | 8-12 | 1.0 | Square, hover brightness |
| About | Hero Background | 1 | 1.05+ | Wide, 50% opacity |
| About | Story Section | 4 | 1.0 | Right side, fade in |
| Workshop | Class Preview | 3 | 1.0 | Cards, center aligned |
| Custom | Inspiration | 9 | 1.0 | Right side grid, muted on hover |

---

## 📱 RESPONSIVE BREAKPOINTS

```
Mobile (< 768px):
- 1-2 column grids
- Full-width images
- Stacked layouts
- Larger touch targets

Tablet (768px - 1024px):
- 2-3 column grids
- Balanced spacing
- Side-by-side text/image

Desktop (> 1024px):
- 3-4 column grids
- Optimal spacing
- Full parallax effects
```

---

## ✨ KEY DESIGN FEATURES

### 1. **Color Consistency**
- Primary accent: #74C63D (green)
- Used in: hover effects, CTAs, borders, text highlights
- Reinforces brand across all pages

### 2. **Smooth Micro-interactions**
- Every hover has visual feedback
- Every scroll triggers entrance animations
- Every click has loading state

### 3. **Visual Hierarchy**
- Large hero sections command attention
- Cards create clear content blocks
- White space provides breathing room

### 4. **Video as Content**
- 5 reels strategically placed
- Each tells part of the brand story
- Auto-play for engagement (muted)

### 5. **Modern Typography**
- Large, bold headlines
- Consistent font scale
- High contrast text

### 6. **Premium Aesthetic**
- Rounded corners (16-24px)
- Deep blacks & rich shadows
- Generous padding & margins
- Strategic use of white space

---

## 🎯 IMPLEMENTATION ROADMAP

### Phase 1: Foundation (2-3 hours)
- [ ] Create animation hooks
- [ ] Create reusable components
- [ ] Update constants with all images & videos
- [ ] Set up video components

### Phase 2: Home Page (3-4 hours)
- [ ] Redesign hero with parallax
- [ ] Create video showcase section
- [ ] Add process cards with animations
- [ ] Implement featured grid
- [ ] Add stats with count-up
- [ ] Polish all animations

### Phase 3: Gallery Page (2 hours)
- [ ] Rebuild grid layout
- [ ] Integrate video cards
- [ ] Add filter functionality
- [ ] Test responsive design

### Phase 4: Other Pages (2-3 hours)
- [ ] Update Shop page
- [ ] Redesign About page
- [ ] Enhance Workshop page
- [ ] Refine Custom Order page

### Phase 5: Testing & Polish (1-2 hours)
- [ ] Test on mobile/tablet/desktop
- [ ] Performance optimization
- [ ] Animation tweaking
- [ ] Final QA

**Total Estimated Time: 10-15 hours**

---

## 🚀 FEATURES TO IMPLEMENT

### Must-Have:
✅ No grayscale filters (always vibrant)  
✅ Smooth scroll animations  
✅ Video integration (5 reels)  
✅ Hover effects with brightness  
✅ Responsive design  
✅ Count-up statistics  
✅ Parallax backgrounds  
✅ Staggered grid reveals  

### Nice-to-Have:
⭐ Lightbox/modal for gallery  
⭐ Video modal player  
⭐ Lazy loading for images  
⭐ Animated page transitions  
⭐ Floating elements  
⭐ Gradient animations  

---

## 🎬 FINAL VISION

A **sleek, modern portfolio website** that:
- Showcases 54 stunning tufted rug images in vibrant color
- Integrates 5 Instagram reels for process/testimonial storytelling
- Uses elegant animations that enhance (not distract)
- Maintains premium aesthetic throughout
- Drives conversions with strategic CTAs
- Works flawlessly on all devices

**Status: READY TO BUILD** ✨

---

## 📝 NEXT STEPS

1. **Confirm this plan** - Any changes/adjustments needed?
2. **Start Phase 1** - Create animation hooks & components
3. **Update Home Page** - Most impactful changes
4. **Iterate through other pages** - Sequential improvements
5. **Test & Polish** - Ensure smooth experience

**Let's build something extraordinary for LOBO!** 🎨🚀

