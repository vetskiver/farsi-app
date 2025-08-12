# 🎯 FARSI FLASHCARDS APP - MVP DEVELOPMENT FEATURES

## **REVISED MVP GOAL: Functional Farsi Flashcards App**
A clean, working flashcard system with 2000 pre-built common phrases/words, three core card types, and contextual cloze sentences that reinforce learning through context.

---

## 📋 **MVP DEVELOPMENT FEATURES CHECKLIST**

### **🏗️ PHASE 1: Foundation & Setup**
- [x] **Project Structure** - React + Vite + Supabase setup
- [x] **Supabase Connection** - Database client configured
- [x] **Authentication Context** - AuthContext.jsx created
- [x] **Database Schema** - Tables designed and created
- [ ] **AuthContext Integration** - Wrap App.jsx with AuthProvider
- [ ] **Environment Variables** - .env file configured
- [ ] **Basic Styling** - Tailwind CSS configured and working

### **🔐 PHASE 2: Authentication System**
- [x] **User Registration** - signUp function in AuthContext
- [x] **User Login** - signIn function in AuthContext  
- [x] **User Logout** - signOut function in AuthContext
- [x] **Session Management** - User state persistence
- [ ] **Login Form Component** - Email/password input with validation
- [ ] **Signup Form Component** - Email/password input with validation
- [ ] **Protected Routes** - Hide features until user is authenticated
- [ ] **User Profile Component** - Display user info and settings
- [ ] **Error Handling** - Show auth errors to users

### **��️ PHASE 3: Database & Data Management**
- [x] **Database Tables Created** - Users, Flashcards, Wordbank, Progress
- [ ] **CRUD Operations** - Create, read, update, delete flashcards
- [ ] **Wordbank Seeding** - Insert 2000 common phrases/words
- [ ] **User Progress Tracking** - Store study history and performance
- [ ] **Data Validation** - Ensure data integrity on frontend
- [ ] **Error Handling** - Graceful database error handling

### **�� PHASE 4: Flashcard Core System**
- [ ] **Flashcard Data Model** - Structure for three card types
- [ ] **Create Flashcard Component** - Form to add new cards
- [ ] **Edit Flashcard Component** - Modify existing cards
- [ ] **Delete Flashcard** - Remove cards with confirmation
- [ ] **Flashcard Display Component** - Show card content properly
- [ ] **Card Type Switching** - Toggle between three types
- [ ] **Input Validation** - Ensure required fields are filled

### **📚 PHASE 5: Three Flashcard Types**
- [ ] **English → Farsi Cards**
  - Front: English word/phrase
  - Back: Farsi translation + pronunciation guide
  - Example: "Hello" → "سلام" (salaam)
- [ ] **Farsi → English Cards**
  - Front: Farsi word/phrase (proper Persian script)
  - Back: English translation + pronunciation
  - Example: "سلام" → "Hello" (salaam)
- [ ] **Cloze Sentence Cards**
  - Front: Persian sentence with blank space
  - Back: Complete sentence + translation + context
  - Example: "من هر روز به ___ می‌روم" → "مدرسه" (I go to school every day)

### **🧠 PHASE 6: Wordbank System (2000 Common Phrases)**
- [ ] **Wordbank Database** - 2000 entries with translations
- [ ] **Auto-suggestions** - When creating cards, suggest existing translations
- [ ] **Search Function** - Find words/phrases quickly
- [ ] **Word Categories** - Basic grouping (greetings, numbers, family, etc.)
- [ ] **Difficulty Levels** - Mark words as beginner/intermediate/advanced
- [ ] **Context Examples** - Provide usage examples for each word

### **📖 PHASE 7: Study Mode (Simple "Show All Cards")**
- [ ] **Study Session Component** - Main study interface
- [ ] **Card Flipping** - Click to reveal answer
- [ ] **Difficulty Rating** - Mark cards as Easy/Medium/Hard
- [ ] **Progress Tracking** - Track which cards have been studied
- [ ] **Study Statistics** - Basic counts and progress
- [ ] **Session Management** - Start/stop study sessions
- [ ] **Card Navigation** - Previous/next card buttons

### **📊 PHASE 8: Progress & Analytics**
- [ ] **User Dashboard** - Overview of learning progress
- [ ] **Study History** - Track daily study sessions
- [ ] **Card Mastery** - Track which cards are learned
- [ ] **Progress Charts** - Simple visual progress indicators
- [ ] **Study Streaks** - Daily study goal tracking
- [ ] **Performance Metrics** - Success rate, study time

### **�� PHASE 9: Persian Aesthetic & UI**
- [ ] **Persian Color Scheme** - Cultural color palette
- [ ] **Typography** - Persian-friendly font choices
- [ ] **Layout Design** - Clean, mobile-first interface
- [ ] **Responsive Design** - Works on all screen sizes
- [ ] **Loading States** - Smooth transitions and feedback
- [ ] **Error States** - User-friendly error messages

### **🔧 PHASE 10: Technical Polish**
- [ ] **Form Validation** - Client-side input validation
- [ ] **Error Boundaries** - React error handling
- [ ] **Loading States** - Show progress during operations
- [ ] **Responsive Navigation** - Mobile-friendly menu
- [ ] **Data Persistence** - Ensure data doesn't get lost
- [ ] **Performance Optimization** - Fast card loading and navigation

---

## 📝 **CLOZE SENTENCE STRATEGY**

### **Contextual Learning Approach**
- **Use Pre-built Words**: Cloze sentences will primarily use the 2000 common phrases
- **User Word Integration**: When users add new words, suggest them for cloze sentence creation
- **Difficulty Progression**: Start with simple sentences, progress to complex ones
- **Cultural Context**: Include everyday situations and common expressions

### **Example Cloze Sentences**
1. **Beginner**: "سلام، ___ چطور است؟" (Hello, how are you?)
2. **Intermediate**: "من هر روز ساعت ___ از خواب بیدار می‌شوم" (I wake up at ___ every day)
3. **Advanced**: "در روزهای ___، هوا خیلی سرد است" (On ___ days, the weather is very cold)

---

## 🎯 **MVP SUCCESS CRITERIA**
- [ ] Users can authenticate and access the app
- [ ] Users can create all three types of flashcards
- [ ] 2000 common phrases are available in wordbank
- [ ] Auto-suggestions work when creating cards
- [ ] Study mode shows all cards with basic progress tracking
- [ ] Cloze sentences use common vocabulary for context
- [ ] App has Persian aesthetic and feels responsive
- [ ] All basic CRUD operations work smoothly

---

## 🚀 **IMMEDIATE NEXT STEPS**
1. **Integrate AuthContext** into App.jsx (wrap with AuthProvider)
2. **Create basic authentication forms** (login/signup)
3. **Build simple flashcard components** (create, display, edit)
4. **Implement basic study mode** (show all cards)

---

## 📅 **DEVELOPMENT NOTES**
- **Approach**: Build phase by phase, test each phase before moving to next
- **Testing**: Validate each feature works before proceeding
- **Code Quality**: Follow React best practices, clean modular components
- **User Experience**: Focus on snappy, responsive interface with Persian aesthetic
- **Database**: Ensure efficient queries and proper error handling
