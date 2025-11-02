// app/modal.tsx

import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#2563eb', '#0891b2']}
        style={styles.header}
      >
        <TouchableOpacity 
          style={styles.closeButton}
          onPress={() => router.back()}
        >
          <Ionicons name="close" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.title}>Modal de Exemplo</Text>
      </LinearGradient>

      <View style={styles.content}>
        <Ionicons name="information-circle" size={64} color="#2563eb" />
        <Text style={styles.text}>
          Este é um modal de exemplo
        </Text>
        <Text style={styles.subtext}>
          Você pode usar esta tela para mostrar informações adicionais, 
          configurações ou qualquer outro conteúdo que precise de destaque.
        </Text>

        <TouchableOpacity 
          style={styles.button}
          onPress={() => router.back()}
        >
          <Text style={styles.buttonText}>Voltar para Home</Text>
          <Ionicons name="arrow-back" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  header: {
    paddingTop: 60,
    paddingBottom: 24,
    paddingHorizontal: 20,
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: 60,
    right: 20,
    zIndex: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: '600',
    color: '#1f2937',
    marginTop: 24,
    marginBottom: 12,
    textAlign: 'center',
  },
  subtext: {
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#2563eb',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 12,
    marginTop: 32,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});