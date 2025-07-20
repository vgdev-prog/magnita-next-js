import axios from 'axios';
import { NavItem } from '../types';

const API_BASE = 'https://687cc3d4918b6422432f623e.mockapi.io/api/v1/menus';

export async function fetchClientNavigation(): Promise<NavItem[]> {
    const response = await axios.get(API_BASE);
    return response.data;
}