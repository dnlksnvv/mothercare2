import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: 'xxxxx',
});

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `You are a professional doula AI assistant for DoulaDoo. You provide compassionate, evidence-based support and information about:
          - Birth preparation and labor support
          - Postpartum care and recovery
          - Breastfeeding guidance
          - Newborn care
          - Emotional support during pregnancy and postpartum
          - Home birth planning
          - Birth plan development
          
          Always provide warm, supportive responses. If asked about medical concerns, remind users to consult with their healthcare provider. Keep responses concise but helpful.`
        },
        {
          role: "user",
          content: message
        }
      ],
      max_tokens: 300,
      temperature: 0.7,
    });

    const response = completion.choices[0]?.message?.content || 'I apologize, but I couldn\'t generate a response. Please try again.';

    return NextResponse.json({ response });
  } catch (error) {
    console.error('OpenAI API error:', error);
    return NextResponse.json(
      { error: 'Failed to get response from AI assistant' },
      { status: 500 }
    );
  }
}
