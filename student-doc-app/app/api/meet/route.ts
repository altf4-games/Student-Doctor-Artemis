import axios from 'axios';
import { NextResponse } from 'next/server';

const token = process.env.NEXT_PUBLIC_CALENDLY_API_KEY;
const calendlyApi = 'https://api.calendly.com/scheduled_events';

// Handle GET requests
export async function GET() {
  try {
    const response = await axios.get(calendlyApi, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return NextResponse.json(response.data);
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching events' }, { status: 500 });
  }
}
