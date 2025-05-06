export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          created_at: string
          email: string
          name: string
          role: 'student' | 'mentor' | 'admin'
        }
        Insert: {
          id?: string
          created_at?: string
          email: string
          name: string
          role?: 'student' | 'mentor' | 'admin'
        }
        Update: {
          id?: string
          created_at?: string
          email?: string
          name?: string
          role?: 'student' | 'mentor' | 'admin'
        }
      }
      counselling_sessions: {
        Row: {
          id: string
          created_at: string
          student_id: string
          mentor_id: string
          status: 'pending' | 'accepted' | 'completed' | 'cancelled'
          date: string
          notes: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          student_id: string
          mentor_id: string
          status?: 'pending' | 'accepted' | 'completed' | 'cancelled'
          date: string
          notes?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          student_id?: string
          mentor_id?: string
          status?: 'pending' | 'accepted' | 'completed' | 'cancelled'
          date?: string
          notes?: string | null
        }
      }
    }
  }
} 