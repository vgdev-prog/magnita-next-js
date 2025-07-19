import axios from 'axios'
import { fetchClientNavigation } from '../navigation-api'
import { ClientRoute } from '../../types'

// Mock axios
jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('Navigation API', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('fetchClientNavigation', () => {
    it('fetches navigation data successfully', async () => {
      const mockData: ClientRoute[] = [
        { id: 1, label: 'Home', url: '/' },
        { id: 2, label: 'About', url: '/about' },
        { id: 3, label: 'Products', url: '/products' },
      ]

      mockedAxios.get.mockResolvedValue({ data: mockData })

      const result = await fetchClientNavigation()

      expect(mockedAxios.get).toHaveBeenCalledWith('http://localhost:9000/navigation')
      expect(result).toEqual(mockData)
    })

    it('makes request to correct API endpoint', async () => {
      const mockData: ClientRoute[] = []
      mockedAxios.get.mockResolvedValue({ data: mockData })

      await fetchClientNavigation()

      expect(mockedAxios.get).toHaveBeenCalledTimes(1)
      expect(mockedAxios.get).toHaveBeenCalledWith('http://localhost:9000/navigation')
    })

    it('returns data from axios response', async () => {
      const mockData: ClientRoute[] = [
        {
          id: 1,
          label: 'Test Navigation',
          url: '/test',
          children: [
            { id: 2, label: 'Sub Item', url: '/test/sub' },
          ],
        },
      ]

      mockedAxios.get.mockResolvedValue({ data: mockData })

      const result = await fetchClientNavigation()

      expect(result).toBe(mockData)
      expect(result).toHaveLength(1)
      expect(result[0]).toHaveProperty('id', 1)
      expect(result[0]).toHaveProperty('label', 'Test Navigation')
      expect(result[0]).toHaveProperty('url', '/test')
      expect(result[0]).toHaveProperty('children')
      expect(result[0].children).toHaveLength(1)
    })

    it('handles API errors', async () => {
      const errorMessage = 'Network Error'
      mockedAxios.get.mockRejectedValue(new Error(errorMessage))

      await expect(fetchClientNavigation()).rejects.toThrow(errorMessage)
      expect(mockedAxios.get).toHaveBeenCalledWith('http://localhost:9000/navigation')
    })

    it('handles empty response data', async () => {
      mockedAxios.get.mockResolvedValue({ data: [] })

      const result = await fetchClientNavigation()

      expect(result).toEqual([])
      expect(Array.isArray(result)).toBe(true)
      expect(result).toHaveLength(0)
    })

    it('preserves data structure from API response', async () => {
      const complexMockData: ClientRoute[] = [
        {
          id: 1,
          label: 'Main Category',
          url: '/main',
          children: [
            {
              id: 2,
              label: 'Subcategory 1',
              url: '/main/sub1',
              children: [
                { id: 3, label: 'Deep Item', url: '/main/sub1/deep' },
              ],
            },
            { id: 4, label: 'Subcategory 2', url: '/main/sub2' },
          ],
        },
      ]

      mockedAxios.get.mockResolvedValue({ data: complexMockData })

      const result = await fetchClientNavigation()

      expect(result).toEqual(complexMockData)
      expect(result[0].children).toBeDefined()
      expect(result[0].children![0].children).toBeDefined()
      expect(result[0].children![0].children![0].label).toBe('Deep Item')
    })

    it('returns proper TypeScript types', async () => {
      const mockData: ClientRoute[] = [
        { id: 1, label: 'Typed Item', url: '/typed' },
      ]

      mockedAxios.get.mockResolvedValue({ data: mockData })

      const result = await fetchClientNavigation()

      // TypeScript compilation will fail if types don't match
      expect(typeof result[0].id).toBe('number')
      expect(typeof result[0].label).toBe('string')
      expect(typeof result[0].url).toBe('string')
    })
  })
})