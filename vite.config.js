import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    // open-notify는 HTTPS를 지원하지 않아 배포(HTTPS) 환경에서 mixed content로 막힌다.
    // 배포에선 vercel.json rewrite, 로컬에선 이 프록시가 같은 경로를 담당한다.
    proxy: {
      '/api/iss-now': {
        target: 'http://api.open-notify.org',
        changeOrigin: true,
        rewrite: () => '/iss-now.json',
      },
    },
  },
})
