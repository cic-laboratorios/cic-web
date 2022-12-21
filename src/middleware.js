import { NextResponse } from "next/server";

export function middleware(request) {
  const url = request.nextUrl.clone();

  console.log(url);

  if (url.pathname === "/webmail") {
    return NextResponse.redirect("https://webmail.ciclaboratorios.com/");
  }

  if (url.pathname === "/cpanel") {
    return NextResponse.redirect("https://puppy.vivawebhost.com:2083/");
  }
}
