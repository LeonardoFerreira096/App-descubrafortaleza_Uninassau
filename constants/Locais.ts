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
  categoria?: 'praia' | 'cultura' | 'parque' | 'compras' | 'gastronomia';
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
  },
  {
    id: 6,
    nome: "Praça da Cidade 2000",
    imagem: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=400&fit=crop",
    descricao: "Centro gastronômico no bairro Cidade 2000, com diversos restaurantes, lanchonetes e opções de culinária regional. Ponto de encontro para refeições e happy hour.",
    onibus: ["074 - Cidade 2000", "375 - Messejana/Cidade 2000", "028 - Circular Leste"],
    criminalidade: "Baixa-Média",
    criminalidadeNivel: "medio",
    localizacao: { lat: -3.8021, lng: -38.4874 },
    categoria: "gastronomia"
  },
  {
    id: 7,
    nome: "Mercado dos Pinhões",
    imagem: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=400&fit=crop",
    descricao: "Centro gastronômico tradicional de Fortaleza, famoso pela culinária típica cearense. Destaque para tapioca, carne de sol e frutos do mar.",
    onibus: ["051 - Circular Centro", "012 - Centro/Aldeota", "073 - Parangaba/Centro"],
    criminalidade: "Média",
    criminalidadeNivel: "medio",
    localizacao: { lat: -3.7304, lng: -38.5267 },
    categoria: "gastronomia"
  },
  {
    id: 8,
    nome: "Estátua de Iracema - Lagoa da Messejana",
    imagem: "https://images.unsplash.com/photo-1578632292335-df3abbb0d586?w=800&h=400&fit=crop",
    descricao: "Monumento em homenagem à personagem de José de Alencar, localizado às margens da Lagoa da Messejana. Símbolo cultural e ponto turístico do bairro.",
    onibus: ["051 - Messejana/Centro", "375 - Messejana Circular", "028 - Leste/Centro"],
    criminalidade: "Baixa-Média",
    criminalidadeNivel: "medio",
    localizacao: { lat: -3.8358, lng: -38.4755 },
    categoria: "cultura"
  },
  {
    id: 9,
    nome: "Parque do Cocó",
    imagem: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=400&fit=crop",
    descricao: "Maior parque urbano da América Latina, com trilhas, ciclovia, fauna e flora nativas. Ótimo para caminhadas e contato com a natureza.",
    onibus: ["051 - Circular Centro", "027 - Aldeota/Cocó", "078 - Parque Circular"],
    criminalidade: "Baixa",
    criminalidadeNivel: "baixa",
    localizacao: { lat: -3.7614, lng: -38.5037 },
    categoria: "parque"
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