// components/LocalCard.tsx

import { Local, getCriminalidadeColor } from '@/constants/Locais';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface LocalCardProps {
  local: Local;
}

export default function LocalCard({ local }: LocalCardProps) {
  const [expandedMap, setExpandedMap] = useState(false);

  const criminalidadeColors = getCriminalidadeColor(local.criminalidadeNivel);

  const openInMaps = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${local.localizacao.lat},${local.localizacao.lng}`;
    Linking.openURL(url);
  };

  return (
    <View style={styles.card}>
      {/* Imagem e Título */}
      <View style={styles.imageContainer}>
        <Image 
          source={{ uri: local.imagem }} 
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.imageOverlay} />
        <Text style={styles.title}>{local.nome}</Text>
      </View>

      {/* Conteúdo */}
      <View style={styles.content}>
        <Text style={styles.description}>{local.descricao}</Text>

        {/* Informações de Ônibus */}
        <View style={styles.infoCard}>
          <View style={styles.infoHeader}>
            <Ionicons name="bus" size={20} color="#2563eb" />
            <Text style={styles.infoTitle}>Linhas de Ônibus</Text>
          </View>
          {local.onibus.map((linha, idx) => (
            <Text key={idx} style={styles.busLine}>• {linha}</Text>
          ))}
        </View>

        {/* Informações de Segurança */}
        <View style={styles.infoCard}>
          <View style={styles.infoHeader}>
            <Ionicons name="shield-checkmark" size={20} color="#4b5563" />
            <Text style={styles.infoTitle}>Segurança</Text>
          </View>
          <View 
            style={[
              styles.criminalidadeBadge, 
              { 
                backgroundColor: criminalidadeColors.bg,
                borderColor: criminalidadeColors.border
              }
            ]}
          >
            <Text style={[styles.criminalidadeText, { color: criminalidadeColors.text }]}>
              Criminalidade: {local.criminalidade}
            </Text>
          </View>
        </View>

        {/* Botão Ver no Mapa */}
        <TouchableOpacity 
          style={styles.mapButton}
          onPress={openInMaps}
        >
          <Ionicons name="map" size={20} color="#fff" />
          <Text style={styles.mapButtonText}>Ver no Mapa</Text>
          <Ionicons name="navigate" size={20} color="#fff" />
        </TouchableOpacity>

        {/* Coordenadas */}
        <Text style={styles.coordinates}>
          📍 {local.localizacao.lat.toFixed(4)}, {local.localizacao.lng.toFixed(4)}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    overflow: 'hidden',
  },
  imageContainer: {
    height: 200,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '50%',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  title: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  content: {
    padding: 16,
  },
  description: {
    fontSize: 15,
    color: '#374151',
    lineHeight: 22,
    marginBottom: 16,
  },
  infoCard: {
    backgroundColor: '#f3f4f6',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  infoHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
  },
  busLine: {
    fontSize: 14,
    color: '#4b5563',
    marginLeft: 8,
    marginTop: 4,
  },
  criminalidadeBadge: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    alignSelf: 'flex-start',
    marginTop: 4,
  },
  criminalidadeText: {
    fontSize: 14,
    fontWeight: '600',
  },
  mapButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: '#2563eb',
    padding: 16,
    borderRadius: 12,
    marginTop: 8,
  },
  mapButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  coordinates: {
    textAlign: 'center',
    color: '#6b7280',
    fontSize: 12,
    marginTop: 12,
  },
});