// hooks/useLocais.ts

import { LOCAIS_TURISTICOS } from '@/constants/Locais';
import { useMemo, useState } from 'react';

export function useLocais() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filtroCategoria, setFiltroCategoria] = useState<string | null>(null);

  const locaisFiltrados = useMemo(() => {
    let result = LOCAIS_TURISTICOS;

    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      result = result.filter(local =>
        local.nome.toLowerCase().includes(term) ||
        local.descricao.toLowerCase().includes(term) ||
        local.categoria?.toLowerCase().includes(term)
      );
    }

    if (filtroCategoria) {
      result = result.filter(local => local.categoria === filtroCategoria);
    }

    return result;
  }, [searchTerm, filtroCategoria]);

  return {
    searchTerm,
    setSearchTerm,
    filtroCategoria,
    setFiltroCategoria,
    locaisFiltrados,
  };
}