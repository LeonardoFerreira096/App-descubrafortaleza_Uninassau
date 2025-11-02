// constants/Locais.ts

export interface Local {
  id: number;
  nome: string;
  imagem: string;
  descricao: string;
  onibus: string[];
  criminalidade: 'Baixa' | 'Baixa-Média' | 'Média' | 'Média-Alta' | 'Alta';
  criminalidadeNivel: 'baixa' | 'medio' | 'alta';
  localizacao: {
    lat: number;
    lng: number;
  };
  categoria?: 'praia' | 'cultura' | 'parque' | 'compras';
}

export const LOCAIS_TURISTICOS: Local[] = [
  {
    id: 1,
    nome: "Praia de Iracema",
    imagem: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=400&fit=crop",
    descricao: "Praia urbana famosa pela vida noturna, Centro Dragão do Mar e Ponte dos Ingleses. Local histórico e cultural de Fortaleza.",
    onibus: ["010 - Centro/Iracema", "078 - Aldeota/Praia", "044 - Meireles Circular"],
    criminalidade: "Média",
    criminalidadeNivel: "medio",
    localizacao: { lat: -3.7199, lng: -38.5126 },
    categoria: "praia"
  },
  {
    id: 2,
    nome: "Beach Park",
    imagem: "https://images.unsplash.com/photo-1561135443-b5ce9b4092b0?w=800&h=400&fit=crop",
    descricao: "Maior parque aquático da América Latina, localizado em Porto das Dunas. Atração turística imperdível com toboáguas radicais.",
    onibus: ["027 - Beach Park Express", "066 - Porto das Dunas"],
    criminalidade: "Baixa",
    criminalidadeNivel: "baixa",
    localizacao: { lat: -3.8471, lng: -38.3525 },
    categoria: "parque"
  },
  {
    id: 3,
    nome: "Centro Dragão do Mar",
    imagem: "https://images.unsplash.com/photo-1518640165620-fd4f99daf718?w=800&h=400&fit=crop",
    descricao: "Principal centro cultural de Fortaleza com cinemas, teatros, planetário e museus. Arquitetura moderna e eventos culturais.",
    onibus: ["010 - Centro/Iracema", "051 - Circular Centro", "073 - Parangaba/Dragão"],
    criminalidade: "Média",
    criminalidadeNivel: "medio",
    localizacao: { lat: -3.7213, lng: -38.5239 },
    categoria: "cultura"
  },
  {
    id: 4,
    nome: "Mercado Central",
    imagem: "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=800&h=400&fit=crop",
    descricao: "Centro de artesanato e produtos típicos do Ceará. Mais de 500 lojas com redes, castanhas, cachaças e souvenirs regionais.",
    onibus: ["012 - Centro/Aldeota", "075 - Parangaba/Centro", "051 - Circular Centro"],
    criminalidade: "Média-Alta",
    criminalidadeNivel: "alta",
    localizacao: { lat: -3.7275, lng: -38.5305 },
    categoria: "compras"
  },
  {
    id: 5,
    nome: "Praia do Futuro",
    imagem: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=400&fit=crop",
    descricao: "Praia mais extensa de Fortaleza, famosa pelas barracas de praia e estrutura completa. Águas mornas e ideais para banho.",
    onibus: ["027 - Praia do Futuro", "044 - Circular Praia", "066 - Centro/Futuro"],
    criminalidade: "Baixa-Média",
    criminalidadeNivel: "medio",
    localizacao: { lat: -3.7474, lng: -38.4562 },
    categoria: "praia"
  }
];

export const getCriminalidadeColor = (nivel: 'baixa' | 'medio' | 'alta') => {
  switch(nivel) {
    case 'baixa': 
      return {
        bg: '#dcfce7',
        text: '#15803d',
        border: '#86efac'
      };
    case 'medio': 
      return {
        bg: '#fef9c3',
        text: '#a16207',
        border: '#fde047'
      };
    case 'alta': 
      return {
        bg: '#fee2e2',
        text: '#b91c1c',
        border: '#fca5a5'
      };
  }
};