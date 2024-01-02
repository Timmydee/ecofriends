import { NextResponse } from "next/server";
import { google } from "googleapis";


export const POST = async (request:any) => {
  const body = await request.json();

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },

      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheets = google.sheets({
      auth,
      version: "v4",
    });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "A1:C1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[body.email, body.productType, body.shoppingFrequency, body.shopFactor, body.interest, body.feature]],
      },
    });

    return new NextResponse(JSON.stringify({ data: response.data }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error:any) {
    return new NextResponse(error.message, {
      status: 500,
    });
  }
};

// import { NextRequest, NextResponse } from 'next/server';
// import { google } from 'googleapis';

// export async function POST(request: NextRequest) {
//   try {
//     const body = await request.json();

//     const auth = new google.auth.GoogleAuth({
//       credentials: {
//         client_email: process.env.GOOGLE_CLIENT_EMAIL,
//         private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
//       },

//       scopes: [
//         'https://www.googleapis.com/auth/drive',
//         'https://www.googleapis.com/auth/drive.file',
//         'https://www.googleapis.com/auth/spreadsheets',
//       ],
//     });

//     const sheets = google.sheets({
//       auth,
//       version: 'v4',
//     });

//     const response = await sheets.spreadsheets.values.append({
//       spreadsheetId: process.env.GOOGLE_SHEET_ID,
//       range: 'A1:C1',
//       valueInputOption: 'USER_ENTERED',
//       requestBody: {
//         values: [[body.productType, body.shoppingFrequency, body.email]],
//       },
//     });

//     return new NextResponse(JSON.stringify({ data: response.data }), {
//       status: 200,
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//   } catch (error: any) {
//     return new NextResponse(error.message, {
//       status: 500,
//     });
//   }
// }
