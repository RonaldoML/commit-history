import { NextResponse } from "next/server";

import { CONSTANTS } from "../helpers/constanst";
import { getHeader, getUri } from "../helpers/utils";

export async function GET() {
  const { TOKEN, USER, REPO } = CONSTANTS;
  const uri = getUri(USER, REPO);
  const headers = getHeader(TOKEN);
  try {
    const result = await fetch(uri, headers);
    const resp = await result.json();
    if (!resp.message) {
      const data = resp.map(({ sha, commit, html_url, author }) => ({
        id: sha.slice(0, 10),
        message: commit.message,
        url: html_url,
        author: {
          name: author.login,
          avatar: author.avatar_url,
          email: commit.author.email,
          date: commit.author.date,
        },
      }));
      return NextResponse.json({
        ok: true,
        data,
      });
    } else {
      return NextResponse.json({
        ok: false,
        msg: resp.message,
        status: result.status,
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      ok: false,
      msg: error,
    });
  }
};
