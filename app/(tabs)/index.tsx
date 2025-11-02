// app/(tabs)/index.tsx - Versão com Hook Customizado

import LocalCard from '@/components/LocalCard';
import SearchBar from '@/components/SearchBar';
import { useLocais } from '@/hooks/useLocais';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

export default function HomeScreen() {
  const { 
    searchTerm, 
    setSearchTerm, 
    locaisFiltrados,
    filtroCategoria,
    setFiltroCategoria,
  } = useLocais();

  const categorias = [
    { id: null, nome: 'Todos', emoji: '🏙️' },
    { id: 'praia', nome: 'Praias', emoji: '🏖️' },
    { id: 'cultura', nome: 'Cultura', emoji: '🎭' },
    { id: 'parque', nome: 'Parques', emoji: '🎢' },
    { id: 'compras', nome: 'Compras', emoji: '🛍️' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* Header com Gradiente */}
      <LinearGradient
        colors={['#2563eb', '#0891b2']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.header}
      >
        <Text style={styles.headerTitle}>🏖️ Descubra Fortaleza</Text>
        <Text style={styles.headerSubtitle}>
          Explore os melhores pontos turísticos
        </Text>
      </LinearGradient>

      {/* Barra de Busca */}
      <SearchBar 
        value={searchTerm}
        onChangeText={setSearchTerm}
      />

      {/* Filtros de Categoria */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.categoriesContainer}
        contentContainerStyle={styles.categoriesContent}
      >
        {categorias.map(cat => (
          <TouchableOpacity
            key={cat.id || 'todos'}
            style={[
              styles.categoryButton,
              filtroCategoria === cat.id && styles.categoryButtonActive
            ]}
            onPress={() => setFiltroCategoria(cat.id)}
          >
            <Text style={styles.categoryEmoji}>{cat.emoji}</Text>
            <Text style={[
              styles.categoryText,
              filtroCategoria === cat.id && styles.categoryTextActive
            ]}>
              {cat.nome}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Lista de Locais */}
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {locaisFiltrados.length > 0 ? (
          <>
            <Text style={styles.resultCount}>
              {locaisFiltrados.length} {locaisFiltrados.length === 1 ? 'local encontrado' : 'locais encontrados'}
            </Text>
            {locaisFiltrados.map(local => (
              <LocalCard key={local.id} local={local} />
            ))}
          </>
        ) : (
          <View style={styles.emptyState}>
            <Text style={styles.emptyStateEmoji}>🔍</Text>
            <Text style={styles.emptyStateText}>
              Nenhum local encontrado
            </Text>
            <Text style={styles.emptyStateSubtext}>
              Tente buscar por outro termo ou categoria
            </Text>
          </View>
        )}
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          🌊 Descubra Fortaleza - Seu guia turístico completo
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0fdfa',
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 24,
    paddingTop: 40,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 15,
    color: '#dbeafe',
  },
  categoriesContainer: {
    maxHeight: 60,
  },
  categoriesContent: {
    paddingHorizontal: 16,
    gap: 8,
  },
  categoryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#e5e7eb',
    gap: 6,
  },
  categoryButtonActive: {
    backgroundColor: '#2563eb',
    borderColor: '#2563eb',
  },
  categoryEmoji: {
    fontSize: 18,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
  },
  categoryTextActive: {
    color: '#fff',
  },
  resultCount: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 12,
    marginLeft: 4,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 20,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
  },
  emptyStateEmoji: {
    fontSize: 64,
    marginBottom: 16,
  },
  emptyStateText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 8,
  },
  emptyStateSubtext: {
    fontSize: 14,
    color: '#6b7280',
  },
  footer: {
    backgroundColor: '#1f2937',
    paddingVertical: 16,
    alignItems: 'center',
  },
  footerText: {
    color: '#9ca3af',
    fontSize: 12,
  },
});