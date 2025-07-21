import axios from 'axios'
import { fetchClientNavigation } from '@/src/widgets'
import { NavItem } from '../../types'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('Navigation API', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('fetchClientNavigation', () => {
    it('fetches navigation data successfully', async () => {
      const mockData: NavItem[] = [
        { id: 1, title: 'Home', href: '/' },
        { id: 2, title: 'About', href: '/about' },
        { id: 3, title: 'Products', href: '/products' },
      ]

      mockedAxios.get.mockResolvedValue({ data: mockData })

      const result = await fetchClientNavigation()

      expect(mockedAxios.get).toHaveBeenCalledWith('https://687cc3d4918b6422432f623e.mockapi.io/api/v1/menus')
      expect(result).toEqual(mockData)
    })

    it('makes request to correct API endpoint', async () => {
      const mockData: NavItem[] = []
      mockedAxios.get.mockResolvedValue({ data: mockData })

      await fetchClientNavigation()

      expect(mockedAxios.get).toHaveBeenCalledTimes(1)
      expect(mockedAxios.get).toHaveBeenCalledWith('https://687cc3d4918b6422432f623e.mockapi.io/api/v1/menus')
    })

    it('returns data from axios response', async () => {
      const mockData: NavItem[] = [
        {
          id: 1,
          title: 'Test Navigation',
          href: '/test',
          children: [
            { id: 2, title: 'Sub Item', href: '/test/sub' },
          ],
        },
      ]

      mockedAxios.get.mockResolvedValue({ data: mockData })

      const result = await fetchClientNavigation()

      expect(result).toBe(mockData)
      expect(result).toHaveLength(1)
      expect(result[0]).toHaveProperty('id', 1)
      expect(result[0]).toHaveProperty('title', 'Test Navigation')
      expect(result[0]).toHaveProperty('href', '/test')
      expect(result[0]).toHaveProperty('children')
      expect(result[0].children).toHaveLength(1)
    })

    it('handles API errors', async () => {
      const errorMessage = 'Network Error'
      mockedAxios.get.mockRejectedValue(new Error(errorMessage))

      await expect(fetchClientNavigation()).rejects.toThrow(errorMessage)
      expect(mockedAxios.get).toHaveBeenCalledWith('https://687cc3d4918b6422432f623e.mockapi.io/api/v1/menus')
    })

    it('handles empty response data', async () => {
      mockedAxios.get.mockResolvedValue({ data: [] })

      const result = await fetchClientNavigation()

      expect(result).toEqual([])
      expect(Array.isArray(result)).toBe(true)
      expect(result).toHaveLength(0)
    })

    it('preserves data structure from API response', async () => {
      const complexMockData: NavItem[] = [
        {
          id: 1,
          title: 'Main Category',
          href: '/main',
          children: [
            {
              id: 2,
              title: 'Subcategory 1',
              href: '/main/sub1',
              children: [
                { id: 3, title: 'Deep Item', href: '/main/sub1/deep' },
              ],
            },
            { id: 4, title: 'Subcategory 2', href: '/main/sub2' },
          ],
        },
      ]

      mockedAxios.get.mockResolvedValue({ data: complexMockData })

      const result = await fetchClientNavigation()

      expect(result).toEqual(complexMockData)
      expect(result[0].children).toBeDefined()
      expect(result[0].children![0].children).toBeDefined()
      expect(result[0].children![0].children![0].title).toBe('Deep Item')
    })

    it('returns proper TypeScript types', async () => {
      const mockData: NavItem[] = [
        { id: 1, title: 'Typed Item', href: '/typed' },
      ]

      mockedAxios.get.mockResolvedValue({ data: mockData })

      const result = await fetchClientNavigation()

      expect(typeof result[0].id).toBe('number')
      expect(typeof result[0].title).toBe('string')
      expect(typeof result[0].href).toBe('string')
    })
  })
})