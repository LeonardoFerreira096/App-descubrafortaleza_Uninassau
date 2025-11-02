// app/(tabs)/explore.tsx

import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import {
  Linking,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function ExploreScreen() {
  const recursos = [
    {
      id: 1,
      titulo: 'Sobre Fortaleza',
      descricao: 'Conheça a história e cultura da capital cearense',
      icon: 'information-circle',
      color: '#2563eb',
    },
    {
      id: 2,
      titulo: 'Transporte Público',
      descricao: 'Informações sobre ônibus e metrô',
      icon: 'bus',
      color: '#059669',
    },
    {
      id: 3,
      titulo: 'Emergências',
      descricao: 'Contatos úteis e serviços de emergência',
      icon: 'medical',
      color: '#dc2626',
    },
    {
      id: 4,
      titulo: 'Gastronomia',
      descricao: 'Pratos típicos e restaurantes recomendados',
      icon: 'restaurant',
      color: '#d97706',
    },
  ];

  const links = [
    {
      titulo: 'Site Oficial de Turismo',
      url: 'https://www.fortaleza.ce.gov.br',
      icon: 'globe',
    },
    {
      titulo: 'Etufor - Transporte',
      url: 'https://www.etufor.ce.gov.br',
      icon: 'bus',
    },
  ];

  const openLink = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Header */}
      <LinearGradient
        colors={['#059669', '#10b981']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.header}
      >
        <Text style={styles.headerTitle}>🔍 Explorar</Text>
        <Text style={styles.headerSubtitle}>
          Recursos e informações úteis
        </Text>
      </LinearGradient>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Seção de Recursos */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recursos</Text>
          <View style={styles.grid}>
            {recursos.map((recurso) => (
              <TouchableOpacity
                key={recurso.id}
                style={styles.card}
                activeOpacity={0.7}
              >
                <View
                  style={[
                    styles.iconContainer,
                    { backgroundColor: recurso.color + '20' },
                  ]}
                >
                  <Ionicons
                    name={recurso.icon as any}
                    size={32}
                    color={recurso.color}
                  />
                </View>
                <Text style={styles.cardTitle}>{recurso.titulo}</Text>
                <Text style={styles.cardDescription}>
                  {recurso.descricao}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Seção de Links Úteis */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Links Úteis</Text>
          {links.map((link, index) => (
            <TouchableOpacity
              key={index}
              style={styles.linkCard}
              onPress={() => openLink(link.url)}
              activeOpacity={0.7}
            >
              <View style={styles.linkContent}>
                <Ionicons
                  name={link.icon as any}
                  size={24}
                  color="#059669"
                />
                <View style={styles.linkText}>
                  <Text style={styles.linkTitle}>{link.titulo}</Text>
                  <Text style={styles.linkUrl}>{link.url}</Text>
                </View>
              </View>
              <Ionicons
                name="chevron-forward"
                size={20}
                color="#9ca3af"
              />
            </TouchableOpacity>
          ))}
        </View>

        {/* Seção de Informações */}
        <View style={styles.infoBox}>
          <Ionicons name="information-circle" size={24} color="#2563eb" />
          <View style={styles.infoContent}>
            <Text style={styles.infoTitle}>Dica</Text>
            <Text style={styles.infoText}>
              Use o mapa em cada local para encontrar o melhor caminho e
              planejar sua visita!
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
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
    color: '#d1fae5',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 32,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 16,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    width: '48%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: 13,
    color: '#6b7280',
    lineHeight: 18,
  },
  linkCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  linkContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  linkText: {
    flex: 1,
  },
  linkTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 2,
  },
  linkUrl: {
    fontSize: 12,
    color: '#6b7280',
  },
  infoBox: {
    backgroundColor: '#dbeafe',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    gap: 12,
    marginTop: 8,
  },
  infoContent: {
    flex: 1,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1e40af',
    marginBottom: 4,
  },
  infoText: {
    fontSize: 14,
    color: '#1e40af',
    lineHeight: 20,
  },
});