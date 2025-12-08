// Modal para filtrar locais por categoria e nível de criminalidade

import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Categoria = 'praia' | 'cultura' | 'parque' | 'compras' | 'gastronomia' | 'todas';
type Criminalidade = 'baixa' | 'medio' | 'alta' | 'todas';

export default function FiltrosModal() {
    const [categoriaSelected, setCategoriaSelected] = useState<Categoria>('todas');
    const [criminalidadeSelected, setCriminalidadeSelected] = useState<Criminalidade>('todas');

    const categorias = [
        { id: 'todas', nome: 'Todas', icon: 'apps' },
        { id: 'praia', nome: 'Praias', icon: 'water' },
        { id: 'cultura', nome: 'Cultura', icon: 'library' },
        { id: 'parque', nome: 'Parques', icon: 'leaf' },
        { id: 'compras', nome: 'Compras', icon: 'cart' },
        { id: 'gastronomia', nome: 'Gastronomia', icon: 'restaurant' },
    ];

    const criminalidades = [
        { id: 'todas', nome: 'Todas', color: '#6b7280' },
        { id: 'baixa', nome: 'Baixa', color: '#15803d' },
        { id: 'medio', nome: 'Média', color: '#a16207' },
        { id: 'alta', nome: 'Alta', color: '#b91c1c' },
    ];

    const aplicarFiltros = () => {
        console.log('Filtros aplicados:', { categoriaSelected, criminalidadeSelected });
        router.back();
    };

    const limparFiltros = () => {
        setCategoriaSelected('todas');
        setCriminalidadeSelected('todas');
    };

    return (
        <View style={styles.container}>
            {/* Header */}
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
                <Text style={styles.title}>Filtros</Text>
                <Text style={styles.subtitle}>Personalize sua busca</Text>
            </LinearGradient>

            {/* Conteúdo */}
            <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
                {/* Seção de Categorias */}
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Ionicons name="grid" size={24} color="#2563eb" />
                        <Text style={styles.sectionTitle}>Categoria</Text>
                    </View>
                    <View style={styles.optionsGrid}>
                        {categorias.map((cat) => (
                            <TouchableOpacity
                                key={cat.id}
                                style={[
                                    styles.categoryCard,
                                    categoriaSelected === cat.id && styles.categoryCardSelected
                                ]}
                                onPress={() => setCategoriaSelected(cat.id as Categoria)}
                            >
                                <Ionicons
                                    name={cat.icon as any}
                                    size={32}
                                    color={categoriaSelected === cat.id ? '#2563eb' : '#6b7280'}
                                />
                                <Text style={[
                                    styles.categoryText,
                                    categoriaSelected === cat.id && styles.categoryTextSelected
                                ]}>
                                    {cat.nome}
                                </Text>
                                {categoriaSelected === cat.id && (
                                    <View style={styles.checkmark}>
                                        <Ionicons name="checkmark-circle" size={20} color="#2563eb" />
                                    </View>
                                )}
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                {/* Seção de Criminalidade */}
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Ionicons name="shield-checkmark" size={24} color="#2563eb" />
                        <Text style={styles.sectionTitle}>Nível de Segurança</Text>
                    </View>
                    <View style={styles.optionsList}>
                        {criminalidades.map((crim) => (
                            <TouchableOpacity
                                key={crim.id}
                                style={[
                                    styles.crimeCard,
                                    criminalidadeSelected === crim.id && styles.crimeCardSelected
                                ]}
                                onPress={() => setCriminalidadeSelected(crim.id as Criminalidade)}
                            >
                                <View style={styles.crimeCardContent}>
                                    <View style={[styles.crimeDot, { backgroundColor: crim.color }]} />
                                    <Text style={[
                                        styles.crimeText,
                                        criminalidadeSelected === crim.id && styles.crimeTextSelected
                                    ]}>
                                        {crim.nome}
                                    </Text>
                                </View>
                                {criminalidadeSelected === crim.id && (
                                    <Ionicons name="checkmark-circle" size={24} color="#2563eb" />
                                )}
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                {/* Info sobre filtros */}
                <View style={styles.infoCard}>
                    <Ionicons name="information-circle" size={20} color="#2563eb" />
                    <Text style={styles.infoText}>
                        Os filtros ajudam você a encontrar exatamente o que procura em Fortaleza
                    </Text>
                </View>

                {/* Espaço extra */}
                <View style={{ height: 120 }} />
            </ScrollView>

            {/* Botões Fixos no Rodapé */}
            <View style={styles.footer}>
                <TouchableOpacity
                    style={styles.clearButton}
                    onPress={limparFiltros}
                >
                    <Ionicons name="refresh" size={20} color="#6b7280" />
                    <Text style={styles.clearButtonText}>Limpar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.applyButton}
                    onPress={aplicarFiltros}
                >
                    <Text style={styles.applyButtonText}>Aplicar Filtros</Text>
                    <Ionicons name="checkmark" size={20} color="#fff" />
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
        fontSize: 32,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        color: 'rgba(255,255,255,0.9)',
        textAlign: 'center',
        marginTop: 4,
    },
    content: {
        flex: 1,
    },
    section: {
        padding: 20,
    },
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginBottom: 16,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: '#1f2937',
    },
    optionsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 12,
    },
    categoryCard: {
        width: '47%',
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 16,
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#e5e7eb',
        position: 'relative',
    },
    categoryCardSelected: {
        borderColor: '#2563eb',
        backgroundColor: '#eff6ff',
    },
    categoryText: {
        fontSize: 15,
        fontWeight: '600',
        color: '#6b7280',
        marginTop: 8,
    },
    categoryTextSelected: {
        color: '#2563eb',
    },
    checkmark: {
        position: 'absolute',
        top: 8,
        right: 8,
    },
    optionsList: {
        gap: 12,
    },
    crimeCard: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 2,
        borderColor: '#e5e7eb',
    },
    crimeCardSelected: {
        borderColor: '#2563eb',
        backgroundColor: '#eff6ff',
    },
    crimeCardContent: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    crimeDot: {
        width: 16,
        height: 16,
        borderRadius: 8,
    },
    crimeText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#4b5563',
    },
    crimeTextSelected: {
        color: '#2563eb',
    },
    infoCard: {
        flexDirection: 'row',
        gap: 12,
        backgroundColor: '#eff6ff',
        padding: 16,
        margin: 20,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#93c5fd',
    },
    infoText: {
        flex: 1,
        fontSize: 14,
        color: '#1e40af',
        lineHeight: 20,
    },
    footer: {
        flexDirection: 'row',
        padding: 20,
        gap: 12,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#e5e7eb',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 5,
    },
    clearButton: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        backgroundColor: '#f3f4f6',
        paddingVertical: 16,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#e5e7eb',
    },
    clearButtonText: {
        color: '#6b7280',
        fontSize: 16,
        fontWeight: '600',
    },
    applyButton: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        backgroundColor: '#2563eb',
        paddingVertical: 16,
        borderRadius: 12,
    },
    applyButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});