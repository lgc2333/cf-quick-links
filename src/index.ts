import { defaultRedirect, redirects } from './data'

export default {
  async fetch(request, _env, _ctx): Promise<Response> {
    const url = new URL(request.url)
    const path = url.pathname.slice(1).split('/')[0]
    if (path in redirects) return Response.redirect(redirects[path], 301)
    return Response.redirect(defaultRedirect, 301)
  },
} satisfies ExportedHandler<Env>
