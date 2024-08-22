import { toast } from "@/components/ui/use-toast"
import axios, { AxiosError, AxiosResponse } from "axios"

const apiInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
})

// Invalidate  global response while 401
apiInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response
  },
  (error: AxiosError) => {
    if (error?.response?.status === 401) {
      toast({
        variant: "destructive",
        title: "Unauthorized",
        description: "You are not authorized to access this resource",
      })
      // We can redirect to login page, if using auth
      // window.location.href = "/login"
      // window.location.href = "/auth/login"
      return
    }
    return Promise.reject(error)
  },
)

export { apiInstance }
