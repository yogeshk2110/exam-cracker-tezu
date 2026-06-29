const BASE_URL = '/api';

export async function fetcher(path: string, options: RequestInit = {}) {
  const response = await fetch(`${BASE_URL}/${path}`, options);
  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(errorBody || 'API error');
  }
  return response.json();
}

export function jsonOptions(body: unknown, method = 'POST'): RequestInit {
  return {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  };
}
