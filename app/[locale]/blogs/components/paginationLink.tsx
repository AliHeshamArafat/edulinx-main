'use client';

import { useRouter } from 'next/navigation';

interface PaginationLinkProps {
  children: (handlePageChange: (page: number) => void) => React.ReactNode;
}

export default function PaginationLink({ children }: PaginationLinkProps) {
  const router = useRouter();

  const handlePageChange = (page: number) => {
    router.push(`/blogs?page=${page}`);
  };

  return children(handlePageChange);
} 