import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .limit(1)

    if (error) throw error

    return NextResponse.json({ data, message: 'Successfully connected to Supabase!' })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to connect to Supabase' },
      { status: 500 }
    )
  }
} 