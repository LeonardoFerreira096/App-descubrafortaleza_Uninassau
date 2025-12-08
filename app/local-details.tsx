// Modal que mostra informações detalhadas de um local específico

import { LOCAIS_TURISTICOS, getCriminalidadeColor } from '@/constants/Locais';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { router, useLocalSearchParams } from 'expo-router';
import { Image, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function LocalDetailsModal() {

    const { id } = useLocalSearchParams();
    const local = LOCAIS_TURISTICOS.find(l => l.id === Number(id));

    if (!local) {
        return (
            <View style={styles.container}>
                <Text>Local não encontrado</Text>
            </View>
        );
    }

    const criminalidadeColors = getCriminalidadeColor(local.criminalidadeNivel);

    const openInMaps = () => {
        const url = `https://www.google.com/maps/search/?api=1&query=${local.localizacao.lat},${local.localizacao.lng}`;
        Linking.openURL(url);
    };

    return (
        <View style={styles.container}>
            {/* Header com Imagem de Fundo */}
            <View style={styles.headerContainer}>
                <Image
                    source={{ uri: local.imagem }}
                    style={styles.headerImage}
                    resizeMode="cover"
                />
                <LinearGradient
                    colors={['transparent', 'rgba(0,0,0,0.8)']}
                    style={styles.headerGradient}
                />

                {/* Botão Fechar */}
                <TouchableOpacity
                    style={styles.closeButton}
                    onPress={() => router.back()}
                >
                    <View style={styles.closeButtonBg}>
                        <Ionicons name="close" size={24} color="#1f2937" />
                    </View>
                </TouchableOpacity>

                {/* Título sobre a imagem */}
                <View style={styles.headerContent}>
                    <Text style={styles.title}>{local.nome}</Text>
                    {local.categoria && (
                        <View style={styles.categoryBadge}>
                            <Ionicons
                                name={
                                    local.categoria === 'praia' ? 'water' :
                                        local.categoria === 'cultura' ? 'library' :
                                            local.categoria === 'parque' ? 'leaf' :
                                                local.categoria === 'gastronomia' ? 'restaurant' :
                                                    'location'
                                }
                                size={16}
                                color="#fff"
                            />
                            <Text style={styles.categoryText}>
                                {local.categoria.charAt(0).toUpperCase() + local.categoria.slice(1)}
                            </Text>
                        </View>
                    )}
                </View>
            </View>

            {/* Conteúdo Rolável */}
            <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
                {/* Descrição */}
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Ionicons name="information-circle" size={24} color="#2563eb" />
                        <Text style={styles.sectionTitle}>Sobre</Text>
                    </View>
                    <Text style={styles.description}>{local.descricao}</Text>
                </View>

                {/* Transporte */}
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Ionicons name="bus" size={24} color="#2563eb" />
                        <Text style={styles.sectionTitle}>Como Chegar</Text>
                    </View>
                    <View style={styles.busList}>
                        {local.onibus.map((linha, idx) => (
                            <View key={idx} style={styles.busItem}>
                                <Ionicons name="arrow-forward" size={16} color="#6b7280" />
                                <Text style={styles.busText}>{linha}</Text>
                            </View>
                        ))}
                    </View>
                </View>

                {/* Segurança */}
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Ionicons name="shield-checkmark" size={24} color="#2563eb" />
                        <Text style={styles.sectionTitle}>Segurança</Text>
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
                    <Text style={styles.securityNote}>
                        {local.criminalidadeNivel === 'baixa' && '✅ Local considerado seguro para visitação'}
                        {local.criminalidadeNivel === 'medio' && '⚠️ Mantenha atenção aos seus pertences'}
                        {local.criminalidadeNivel === 'alta' && '⚠️ Evite horários noturnos e locais isolados'}
                    </Text>
                </View>

                {/* Localização */}
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Ionicons name="location" size={24} color="#2563eb" />
                        <Text style={styles.sectionTitle}>Localização</Text>
                    </View>
                    <Text style={styles.coordinates}>
                        📍 Lat: {local.localizacao.lat.toFixed(6)}
                    </Text>
                    <Text style={styles.coordinates}>
                        📍 Lng: {local.localizacao.lng.toFixed(6)}
                    </Text>
                </View>

                {/* Espaço extra no final */}
                <View style={{ height: 100 }} />
            </ScrollView>

            {/* Botão Fixo no Rodapé */}
            <View style={styles.footer}>
                <TouchableOpacity
                    style={styles.mapButton}
                    onPress={openInMaps}
                >
                    <Ionicons name="navigate" size={24} color="#fff" />
                    <Text style={styles.mapButtonText}>Abrir no Google Maps</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    headerContainer: {
        height: 300,
        position: 'relative',
    },
    headerImage: {
        width: '100%',
        height: '100%',
    },
    headerGradient: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '70%',
    },
    closeButton: {
        position: 'absolute',
        top: 50,
        right: 20,
        zIndex: 10,
    },
    closeButtonBg: {
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    headerContent: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 8,
    },
    categoryBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        backgroundColor: 'rgba(255,255,255,0.25)',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 16,
        alignSelf: 'flex-start',
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.3)',
    },
    categoryText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '600',
    },
    content: {
        flex: 1,
        backgroundColor: '#fff',
    },
    section: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#f3f4f6',
    },
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginBottom: 12,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: '#1f2937',
    },
    description: {
        fontSize: 16,
        color: '#4b5563',
        lineHeight: 24,
    },
    busList: {
        gap: 8,
    },
    busItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        backgroundColor: '#f9fafb',
        padding: 12,
        borderRadius: 8,
    },
    busText: {
        fontSize: 15,
        color: '#1f2937',
        flex: 1,
    },
    criminalidadeBadge: {
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 20,
        borderWidth: 1,
        alignSelf: 'flex-start',
    },
    criminalidadeText: {
        fontSize: 15,
        fontWeight: '600',
    },
    securityNote: {
        fontSize: 14,
        color: '#6b7280',
        marginTop: 12,
        fontStyle: 'italic',
    },
    coordinates: {
        fontSize: 14,
        color: '#6b7280',
        marginTop: 4,
    },
    footer: {
        padding: 20,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#f3f4f6',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 5,
    },
    mapButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 12,
        backgroundColor: '#2563eb',
        paddingVertical: 16,
        borderRadius: 12,
    },
    mapButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    },
});