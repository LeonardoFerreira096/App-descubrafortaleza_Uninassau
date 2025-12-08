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
    imagem: "https://poder85.com.br/wp-content/uploads/2025/06/Beira-Mar-de-Fortaleza-gera-R-4-milhoes-por-dia.RedeANC.webp",
    descricao: "Praia urbana famosa pela vida noturna, Centro Dragão do Mar e Ponte dos Ingleses. Local histórico e cultural de Fortaleza.",
    onibus: ["010 - Centro/Iracema", "078 - Aldeota/Praia", "044 - Meireles Circular"],
    criminalidade: "Média",
    criminalidadeNivel: "medio",
    localizacao: { lat: -3.7199, lng: -38.5126 },
    categoria: "praia"
  },
  {
    id: 2,
    nome: "Parque Rachel de Queiroz - São Gerardo",
    imagem: "https://i0.wp.com/mdc.arq.br/wp-content/uploads/2023/09/220305_Parque_Rachel_de_Queiroz_971-1024x682.jpg?ssl=1&resize=2000%2C2000",
    descricao: "Segundo maior parque do Ceará com 10km de extensão. Possui Lagoa do São Gerardo urbanizada, polo gastronômico, ciclovias, quadras esportivas, playground e áreas de lazer ao ar livre.",
    onibus: ["051 - São Gerardo/Centro", "375 - Circular Oeste", "073 - Parangaba/São Gerardo"],
    criminalidade: "Baixa-Média",
    criminalidadeNivel: "medio",
    localizacao: { lat: -3.7318, lng: -38.5443 },
    categoria: "parque"
  },
  {
    id: 3,
    nome: "Centro Dragão do Mar",
    imagem: "https://www.dicasdeviagem.com/wp-content/uploads/2024/06/centro-cultural-raga-do-mar-fortaleza-ce.jpg",
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
    imagem: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTEhMWFhUXFxcaGBgYGCAbFxoaHRcXGBcXGh0fHSggGB0lHRcYITEhJSkrLi4uGB8zODMtNygtLisBCgoKDg0OGhAQGy0mICUvLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKy0tLS0tLS0tKy0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAFBgMEAAIHAf/EAEwQAAIBAgQDBQQFBwoEBQUAAAECEQADBBIhMQVBUQYTImFxMoGRoRRCscHRBxUjUoLh8DNDU2JykqKy0vEWc4PCJERUVZMXhKOzw//EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EAC8RAAICAQMCAwcDBQAAAAAAAAABAhEDEiExE0EEUWEiMkJxkaHwFIGxBcHR4fH/2gAMAwEAAhEDEQA/AGUCtqyK9Ar3DyTyK2ArAK2ApDMr2sisigCzh9Y9aPYfwrrS8lyBHnVxMSMsGubLByN8c0g5afPzB6irFoAaAUM4XdAG9E11rimqdHVB2rN2g6Haq68PthswXWrKiK3NQm0XSZWe3yFVb4dfMnYCr1y0TUwIAloHmaFKhNWD8NhX3IA661fKRVS/xuwv1wx6L4vmNPnQzE9p/wCjt+9j9w/GolkXcaVBq4CBUJY0tYjtBfbSVX+yo++aHXcXcb2rjnyzGPgNKjqodDbfxap7TBfUgUKucZtrIzZukAt9gil0IJ2rcmn+oa4ROi+4bHaMDZHPwA+2flWh7Rvytj3tP3UEQg7a+mv2Vs9xRoxy/wBrw/bFQ8s2UooLt2hvHbIP2T97VBc4zfP84R6BR91QJgnIkAQdjIg/OpfzY3UUqyMexXuY+6d7lz++fxqB5O8n11+2r44WedwD9n99bjhY5ufcB++n05MVoFlRWZKJXsNYtgF7hALKokjUkhQBprJIqfD4Oy4zKcwPMOSPkaOjIakBe7rzu6YBw21+r8z+Nbfm+1/Rr7xNHRfmPULbLWppnGCtf0af3R+FbjDINkX4Cn0fUVinmHUV4rjqPjTd3S/qj4V6FHQU+j6isUg45EV41N9eA01i9QsVUuDqJ9akBFMlehqXRXmPUC8Rhyhg1GBTHxHDypEDyoAUjevaxZNaPMyQ0s0Ar0CtwK9ArSyDSK9itwtbZKVjoiipsNvXmSpLRC6kgAczoKmT2HFbh3C2AADEGpjfggUv4ntGBpbGbzOi/iaFYvid24ZZ48l8Pz3+deVLLG99zvSdbDriOIW09twvqdfhuaoX+0qD+TUsep8I/H5ClexhmOyn1On271ct8MJ3IHprWVyfCLLOJ7Q322YJ/ZH3mTQu5fZjLsW82M/btRA4G0CAx1MwC0bbxEE1H9KwyEAZQcmcEL9WCZmOgb4UnBvljSb4RUST7IJ9ASPjtUq4S4fqx6kfdNWfzmDZa6FbQxlOjZpAA8tx8arPxO5oMoXwOza5oK5wNdoOX+OS6cUVpkyVeGvzZR7ifnIqVeFrzZj8B9gofhsQ93uiXdZusrAED2UkgwP1lOn9Y1Rsi+bN0ZbjG4UC6nY5mJk6DTQ+6mlHsi+k+7/LGFcBamIBPMEk+mhPlUyYdBsqj0Aobw/ve9lrcK9q3mJYeFlViVjc6mKLGtFRjNU+QXxzji4YCQSSDlA2kbA9P3Gub37wJJhAWMxl66ty6mmrtrw287q9sSAuWOYPkD1kbdKWbXAsWWANl55MQBpz8hvSlbHGhx7I8fN4Gy8ZkUQRsRAn0jSg+AvzZU/nR1ByQ9xSodpLXMhuAFlIyxvEHrFX+ynZy7ZfPcbTKRHmft+VSDsngrdtELhMqG2zBlRritGYXDGs5RqIPnWkXsRIG91hluJb+lXriu5TIoLILguG6zE66zoTqdZ2mKZxmCRkBu3bltVb2tMjottFAQoCS3eBpmAV5RTFct8NW2lpr1oKjs6jvgCGYtm1DTBzsI2gxVNG4OggNZOke0z6Qojn+qvwFMRSt4rAd3ati1eZLKs6kkAAd5JVjnG9xQAIgxpIpq7IPZOGX6Oht2wXGVtwQxDTqec0uXeNcHRtRbLAR/IsTHSSnn86MYDtHh8o7m1eKESMlhspnWRoBrSY0Ms17QH/AIj10wuLP/Rj7TXv5/ucsFifeqj/ALqQ7DteTQP893+WBve9kH/dWp4xiv8A0L++7b/GgLDs1k0g4j8ohS69o4R86Ehh3gO2+y0bwvG8VcRXXAyrqrCb6DQiRyoHYx15QI8WxY1fCKijdjfWANydFJOgJ06UNTtTbW8e8clpKhE8QkARO0TmkRPPWdKzyZFChWNxrBQK9xTFA+HCoQSMs31BMgkGMumxre1xHFfXw1tD0OIX4+zTeSKjqbHYzX8eCtBrgk1vFehK9WEFDg4JScuSMJWypU9tBUgt9DTchKJVNusy1ausoHiYDp1PoOdCbtprh8ZhOSD7WPM1nPLpRccdkWK4mBpbgnqdvcN2/jeoFwl1zLa+bGB7lG3wFFLNlVGgipwK4p6p+8/27HRCKjwUbXDVHtEn5Crtqyo2AFbVSxfGcPaMXL1tT+rmGb3KNT8KlRS4RVhBmgE9KWMJisTcylg+ve6KCBpbTJJEDVs2/Wr/APxBm/kcPiLvmLfdr/eulflNYcTjm9mxZtjrculj/dRY/wAVKUWy4ZFG9iCzwq9CiEkK4zMSWBJujw+RDg+6DVi3wImA7+EW8kKI1yugaSeQdtPOlLD9pr1zEXLV/GJYt22dS9tFWSrFYBfNE70QNzBvvdxuK/s98yn+4FShY0VLPIZbiWLVo2711YMli7hSSTJMyI1+yh35+4evhW4jwMsIGumNdIUNO5+JqlhsPbUzZ4Q0/rXRaQ+sszNV/vMfHgs4W0P61x3+Soo+dVpRm5yZVw3bjDu/d4e3eusZMIgHmfaIjaro4ri29jAkf8y+i/Jcxrn3Yy1mvlrVzuYTW6wDAGNRDQsmec023btgfyvF3J5hLtpf8qzTSFJhbNxFtlwtv1a45+QUVHcwuN+vjLVv+zYH2u5oKbvDTviMTe9Ll9/8ulYtrh31eH37h6/R7jfN9KdflEmvaK+9mxcccSZ7qgZUBtLJzAbKsnQmljs1xnvLzjHYu6LYSR+lcAtmAiFOuk6Ub7UPaGEu93w1rIOUd41q2kfpF6MW1299CPyfXbq37ps2Vut3YBBcJAzjWSDO21S+SlwMi/mo/UvXf2cQ/wBulT2hgB/J8Muv/wDa/wCuKKjEcRO1jDr/AGrzH7Er0JxM7tg09Bcb7SKq/wAskq28UB/J8KuD9i0n/dU35xxX1eHEet62v2TXr2sb9bG4dPSz+NyoLiXh7fFLY9LdofaxpbfllfnY5v21ts2JvM9vJcLJKhs0fo00zQAdADXQOyr436JhxbTD5RaQKXd80BdJAWAffSL2uc99cHfLe8S/pBllv0a/q6abadKaez9yx9GsZ+I3bZyLKLcUBdNoykipRTGiOIdcIPdcP31nccQP87hh6W3P2tQU3cFz4liD/wBY/ctam9w/njcQf+rc+5aYBv6Hjz/5iyPSyfvetWwGO54tPdhx/qoKbvDf/UYg/t3vwrU/mz9e+fffoEJHHbT2sdeJcO+Y5iPATKgzAmOVdD7PYLGPhrLLiwgNtYXuFaBGgkmTHWufcew6nEsbCXDakZSVcn2BPtCTrO9OvAeE4P6NaN9LoYpLeK4B7RA0DQOXxqJTjH3nQ2XsXhcUhe415rmRCD4VtofaBnUxAYGYHtDWlZT3eIt3cQ6EoIVVRi8lRlkkZmHi3JmSNOhHjISwpZbQuIzEKSWBXwnRoYaBgJ9dNRor4LEv3kKM7MxPdgAlgyxkJ1JGkR69a4G3Jy32ENOJ44y3BeMd0QpVX+q2Uq0LAlgVglZiRJE5a0sdoHOZmuPbzO5UKqMMpY5TIEE8tJGm9A+IcSbS3diD4mUKVBbN4QCACrRGuvsgb1vxO21p8qhTopMd4ACRtE6QI5D0rOUE1TX8f3Cjp+Huk3HUwQuWDsZIkz15dKmuhwPCFJ03JGnPkaDYPHyWmQdAVEQTook77efI0WfFAdT517WHxMJxu3+5hOG+yJ0fSSIjfXQdela4i+B4V35nkP3+X8GpZxGcHrElT+tEa+h0/wBqHY3GAZVk6trO8AjMZ6a7efuqcnjIRjaBY33CaqJ3kkTJ3j8PlXt+8iKWd1UDcsQAPeaA4riZzsc2WNOp2OYR6xyrLeKYwzAbnKx8WusGDtoNIjeuGX9QSbtM10kvF+1Nuzaa6tu7cRYlguVNdBDPGbUj2ZrzFcRuiO+xGHws/VH6S76AtlE/sGqfa3DC9bRWa9czOgyJAQ6k6j3bmYieRq4LD2ASlvB4QdT43PMyFyAnQ/WO1dePLGatBTKhW3c1yY3F/wBubVo/ssbaEfsmgX5Ord4W772u4tqbsFrskrCg5QojTxc2FH8Rca4rRfxl8kEAWbXdW5jTxZQY/bob2d7M3bdvK/D7LOXJzX7gKxAA8IV428qtgE7uOSYu8Uk80w6oPkouP86jFnDPthcbiT1ud5l//K6r8qL2sBjdluYayOluyzH4lwP8NS/mK62tzG4g+SZLY/wpPzotBRzvsVZuNjL13D2LZgXAFdsqoDcUzIVtRoIHxp2xWLxQH6XF4KwPQsR73uKPlU2F7D4NJ/RM075rjmfUZoNXbHAsHb1WxYU9ciz8YmptDpi2/ErR0fi1x/KwifLJbY/Oob1vDuDFviV8wYLd8FmNNyoindb9pdio9P3VqeIW+pPuNLqINDObdneB4i2zd5w/vkJJCu1sLPhg+InaDy501WLWLH8ngMJa9bn+m1RxuJp0Py/Go24uv6vz/dU9WKK0NlDu+JH62ET0W433rXn5ux7b422v9nDg/wCZzVw8Y/qj41qeMH+r8/xpdZD6bB2O7LXb6G3fxt10MSBbtoDBBGy9QKhwHYO1ZJKX8SpIglbgWRMwcqiiv53bqvwrS5xZh9YfAVPWQ+myMdkrJ9q5iG/tYi59zVn/AAXg/rWi39q5cP2vWp4w36/2VG/GgN7n+Kjrh0y0nY/AjbC2/eJ+2p17NYQbYaz/APGv4UHbj6c7w/v/AL6hftHZG99PfcH40dZh00MycHsDaxaHpbX8KmXA2xEW0H7I8/Kk7/ibD/06f3wfvolZxGdA6+JTsRsaXV9CtAyrZUclHuFekqBJIApBv9qcOrFWuAEEgg7ggwQarX+1OGZSverqI5/DSh5HWyFpGrHdrbFp1Vg8M0BoAQ9WDTECt07RhmKophSs3IJtkaZtQDlPKG6iJGtImIdBaS1eP6Q3cxt5CGyyomfCTMDfo3lV6/xO1aQYazcFpRkC3Ne6N1SGLMVDTrlMf1tdDXK8uRkMaOI8YcjLaynMYDZgykQRIysGgnQHqD0NLHFb9s3hmtsb93IS0suoGygkqR5j3MIofxXioS2wF1me4Jc5ozHdY2LAE6eLQctIqzwm2RhIfEqmZR/NglQys3j8QzgzA0JA5a1i9TeptgSYpmF0EK2UqAZUspkwieCWMxGYk7DXQmgeB4aWcOrqs+I3AZKrIkZJBYKYPXUeU52gwj2lAXEh1JfMM0ljmBGcBoA5gxGg0mJpXcRb9l2EKSQFILFtAQQYUgnnBaOY1rSMWlcRUW8Wrm4ULiQGO5UA5Dqq+agaxJO8aga8Psm5bUnvgAAq5bZZYA5EK3OeY9BVK8gcrkF3LoQ0ABz9Zv1d9I226QZMLZs5YvXLiuNIVlCxAI5GdDvVKHsq9xnS3vZRpqdDpzOoB8us+VUMXi8oEmO8JXRpPTMRECQevOocVi8oVjsdTJ8QB5kdJ5/uqrxUrdQSxAVZleR1kiNhvpXLj8nY2HsPjlt8wM6oQeoGnyoZjMQbryoEywBB5HLqZ2235RzoPexuWNTEDUiRO0+h12nefKvfpoKyTELoTHiOXbXUCYj1FavWI1uYkkQXEszSBBGYExGvIQffRDviGW3BiNmkEEDSfeDyjbbSl7G4wtd7wKqwoI0gSAdNQJGszz86sYLFO0940LvljQCCARI01j5b0ZYXugHTA3MuVCTmmdfqnqY26ekdRWt3icFVUwxaJA1EdfgaHJeygEtzPQQI0nxQR86qvdtyTbfPrMAgGSRuNNBHyFYSTVNAx0t8VAQHIx9/+9V73aCPqqPUz+FAFxTtOQZjGaS8bjwxvGgoDx7CYp7ipbV/6zAwknXyaAOp09DXTh8TKXsy2GmhzudoT+uo+H31Wx3HyiB3uFVOzEwpnaDsa4/xOzcQlbpbMNwxMjSdZp+7bWcnDsKnTul+Fo/hXZoltuPUiXEds7PO5PxP2VRudt7f1Qx9F/GKRu7rzL/Huq+gT1UOFzt10RvfApg7MY58ZZuXDKZXKgbz4Vaf8VcxYa11P8mln/wTH9a65/wov3USwpRsayW6EnFdq74ZlGXRmHM7EjrVI9q7+YBmAHOFk/M61TvmWY9WJ+JNV+6BJmNx9k9fKreJJWSslugk3HsUf50j0C/hUbcVxJ3vP7jH2VWrYVfRRHVD3Yu9cfHWQ9x2EuSCxIMW3iRMb0x/lWQrbslSRNyNNNMraUA7ALOOtelz/Iwpp/Kuv6G1/wAz/sasp40mjWE7Ry1VJ31rYWBUpArZFJ2BPprW8caoylN2RCxWww1WBYbmpHrp9tbBPMfGfsmjQg1srWxDBY3M5ukDb512fsmgODw/9n7mrkJRJ8TTMeyDp1OsV2HsaP8AweHjbLud/rcuXxrCcVZqnscm47gP/E39f525/nNUV4fqDNMPaJgMVfEa96+s6bnlVG25JgBZ9w+Z2qqVCsmxNy7dWSc7qZLEgblQCBoInp69aG+J7myrJgkr4RI1Pxk8z5Hama1gyFCuZc+IkGe7UD62w5gkgmBHPSgXFPHeL5AFXQIhjNlPs76HqZrico21HgDbC4i2jENGp/o8wbYRBGx1MkRvpyq/9NulMnefymwBBYxmXKehOY9ANI8gOLaJjNAOszCyToSfdrVnh2JQrLpma34jBPiUEZgYEgDeZ60nDuA0dneFi6XJs5FbMVzhmQhCPCra6ToG1J8W+1VMfawtsPbFqyL8sxZ8xWd1yFyRqNYbqRvEk/pRZBZNq3ZuXAMrJ4VCmDowbXxkkqeXnSXxK2VuEsYaSG3ygiIA3LCB5cqcZNvyCy3hL9269vPdR9AFF0jIIBAzKdGJmZ36ztQ7FXRnbKbcTppE+cBdPTStsTgrltM7AZYB0YSZ28MzrruPtqEkNrH2fKda0SXIhxvYpczHUMdxMDTXX0nWprli4iC4CSSRqxgE6gSJO5Onmw8qscNw1t1K3DZVQuYHKGfNqcqhpklZ1kgc4OlAb1wglQ4y5p1HRgRHMHTkT7q53GlyVaDtrDueZuAGCSBGgAkE6mJHLmdardoG/RG5I/UYOOWpWN4YZp+PlW9riBZoBYJou405HTlMesUM43iDqhkZmCiTp4tW0/aURyrJanNWLuWsbfLzbC5zyCAndcyzyBnXXmapYe43ew9sAACYJlTGbxDk0bx59av8LQWwwlA2+WIuHWDOmwERER8SYGvK9wEHxkELpJmR0HqTP+9Ke+kLJcXihnItERoG1AbQnnHi0O+o03odZuNbfvDbmNGBYHnplWNunv2rXHWURiNCBoWGktpoRMRz06US4TcV1geExIjblPLoNa0dKNdhl7g/EtSckbjNOpMaABjIGvLaRRp8W7MoymPDMkCTIgbHQxtoTQ7hqILkOQy8pAmYE7RPPXfQ1fwePQE5LecZiFVdR+02wGg3rmcYatwoXO1HZzG4ljFhQBIU5lAjXfxTz6e6mjtrwC9ibVm1aCjI0kuYEBSoiATz6VYxPFwg/ShA0aKviI6HWPw03pZ4t2ruQbirlVTGfLmgnYbZVPlrXcvEwjUY7stYZNegOHYK8IDXrQP9XO3r9UV6vZG2n8pik1B0AUH2QRu/nG2kUDxHaMOfGzt5cvhECp7HaxU9i2vqbasfi4JrTqZpc7E9PGu9hgdmsEZJxkNExK66AxPrI91N/ZTJYw/dW2zoC5D7yZkxGlIH/wBQb+yuw9EQfYK6T2XxjXcHbuXCSzqSSd/aMbeUVft1uwqKeyFZOwVj62Iug9Mqg8vUDcc+dWLX5O8P/S3j18SDy5IaTL3a2+HaHciTvBESeUa++iWB/KKQ36e0TrqyGDuCSVPPlII0oc8i53Eox7DSn5PMMNzdPrcH3WxUy9gsIOTn9o/cRQ+09vFqXw+KdTrpnYhRv41Ygr/GlLnGvp2H1dWZOTq7FY6nmvvoj4jU67+QPEP3Duy2Gw91blsMrCRJcxqCDuaI8Y4VYv5RdXvAuoBYxO06Guc/k84pcu40Bpju3PtE/qj76Yfyq4hls2cok94ecaZDWjt7kqkGbfZbCDbDr8W9P1qlPZzCc7CkeZY/aa4ovErhJECRO56Ca3PEbnRaVsrY7OOzeDH/AJa1/drb8wYP/wBPZ/uiuKHidzoPhXh4m/6oouQUjtZ4Hg//AE9j+4tEOH2raqFRVCgmAo0Gh6VwC7xRhuomux/k9vM2DssSsEeFQCMurTJLGZOvKhWIKNwzCsxZrNliSZJRSSZ56VuOFYRdRZsrGshFBHmCNQfMVyXtPxJfpF4i2ZLllbkwOwIIMEaHfbzGu/Zy7d0xB7oIh1ExcP8AVUZYJIJ2M1E5aVZQ9Y8YMk927F0YjIrFi5EGIJlgMvUD2qRLxueO20i7bzPEQwGhIBCzHinUbDlFEWvrldso8YMktsWU+Ea66ycsaAddWU718EksSTIAJnmd9DqZjrua5IqMpWkSbLhJknUkMY1O2usehPkBNXeBYhbF1CGU3NszNFtSTEgic23MEa7bVU1RJfWQdM0GN5HzEVtiuH+BWGpbVoByoTqBMR7JBI5TWjkuAoZuN41wytbxAvFdM0lVJERAkRtpO8eVAsTiLb+NkJfQsRMM2XUxG2bxcuYqllNqUa3GZIMkNoSrggcvCV896qXcUxklpIHP2Ty22jypKG1CCoxDszIbWdsh8OpI0Hj0MswA5zttpWnFUtK4BS4jZFzLkO8b6mTOh2G+1VMJiiHLpoTpmgAjNIYDkNDG3OosVcObx6k66nl8dq0utkNM6jw/sxcuLoMo7q3qHDqCxJIUjU+EE5dQJ0MNS1csaspIIBIPIzz11j76buyeO7v6bYVrfdWnLAxObMD+jBLTmTKoG4AXnuAeJwgYW3OuY+JRABXOynaDpp6x5UZMSaWkpRrd8Wl+7v8AwBVxKXYKyhkBiZklRuI25fLarpa3dQo8EiYJEwCRqDyPwqnirP0fEEXEKKzSrBsqggbBpgTAOsbnWvLV1pOacuphdRtodBrFcmTHTr6ColvM4cWwxckEq5PjKggZCSdWBIPQiNKpWcIWJ7ssF1JZh5S3sjp+NeYvFMrI5lHVxECMoIAbQ67EH3CrGEK3bq2hmEkQWbkAWJM6RvVRTSCjSyyKB3iNB1DKdTJ1gNofWjOHxgCoUtLGdNwDOU5oIAEgk70MS1kdra+JC/s5QwJ08KzrsBqCJirtnCrZzlyVcN4RAn2QQY2C71EpqLtjjFydILcbs3MXctPdc4VbQJubq7E5Y7scuesn3zpUx3GVVRbwylFAjMTNxvMk7fb6VQ4pxproGeCRseg8hypcv43PIXbr1/dUpZPES9DqqGKNvkL4HiefEWrIGbNetq5PQuMw6kxOtM35VCq4RLaAKveLAAgaBjt7qSeytofTLJn+cn0gE/dTH+VG9KWlzT453n6p/Gu2EceFqCW77mDlLInJ8I52ijMKuhRVeyus1OTXXEwkQW4DGu2dmTl4fYOw7lT8Vn764tg8K118qbnXoAOprr+G/R8PtqW1XDoCM3MWxOnrWOXJoSbRpjipSaT3OO6nWtbyjLtUznT3VBeOlXe5KJLGIa2Ue2WVgNGQwRr/ABpXRuzfbQFVtYsCIAFwDTb66jb1GnkK59gsMGWSSOnxqzc0HuqMmKORe0VGbi9jreB4LYtXxirK7qQQp8DBoOYcp05bzQX8q+JU2rBUz+kaRzHh5ihH5N8dc75rWY93kZsvINmUSOm523p74jw21fQpcUMD8fUHkfOuF+In4eWme68zo6UcsbWxw3CoWu6RqedTMdKOdpOyl3Ct3tuXtAzMSyf2hzHn/vS2LnI16GPLGa1RZzTg06ZIWrwOKjatSaqxUZf1IrtP5O9MDh/Q/a9cVrsfYBm+hWPER7XIfrP5VEsihuylBy2QgduzGOveqn4op++osP2guIuS3+jQhQVB0MLlYtzbMfFExNZ25acbd/6f/wCpKDWqGlLkAxc4u7W8hOgMiABr19RtO+tVMHxC37BQk5hq2g5+HTULrO/LlVdq2sXVSSM0kAGYjzjyqXBLgCzi7pYyx15dBHStcJcCFS6ZkDAsA2UmBtmGo5HblUJcwWB21iNqrHEORJOhJjbWKiMOxNBzDWgxDbpExpmAloiTqABqY67VTxPdnRTplGYjr9aBGux+VPHYvCJ9FOMIzuiXcqZdBlziBGpJ1E+nSkvH8P7l8jrlMBgFP1W1B5kiOutU4OKtiKeLtWwxNu5mB1gqQdhO++unnEkDao8ZfLNLMCecjXXXWBrvWzuuZl1I1g/GpVsIwBJPx8z0FS/UfA52sXasNibILMHdTZBGWA2bMTMQV9nz16mqdi7lKnUhTmIkCY8Xuq92vtj6TavsA51VvEcsQIkiI9udKo4jhVy5kFq04nQsZC+mc+EadY3qUtW6/gpzklSLdzi1u8XN4qyA6p9Zhl2UN5g668tqCPdFqLlsv3XslW8RTQkagQUaDoRy51NguFYhLgY4clYy6LKMYygAroWO8z50cwVxbVi4HtOksVgAsZAMrtH1W5x86hYqlvZCbFPEt3qvczSFKAebMPEfgoFEuzxKX2OQkhCuhBMmJMH0NUF4cLuL7iypGY/pEJCAMuYkS2g/EkCnG32WxSsWWz4iG+sswSCsZWPWZjnWkoPRSNIypoq2bwwSS7C5iTJ6rbn7W/jbehwiw2NvshuEEqzlozExHKR1+VTXeFuNGtEtqWlhmB21DQw1HSrfBFe0911tXBCsJAGxcaaNP+3lWEfC3LVN2bddJVFUJvFGZPCwgwDHSROtDdcqxO5Onw1+FOuLwucybEyBq9tiduouAVVbAqIBswCF0yMJB35xuTyrrglFUjneRt2wd2KDnH2WIYgtcOkAHwPMagDU7eVM/wCUJyxUZCIVjrl8tRqaG8MvMtxCoCBScpjadIHu0qTjmNa6VZmDLEGPa5NyG06TUyjFyUnyJZmk0JOG717gQEBmJ9oADYkzpA2P7qtdxdF1VLLLEFSVhTOoMFdj0j3UYu2TlY218TIBrJY+KSqCecfxrQsrlFvIkFWPqWBMMQZy6wY8q03fDFqsLYPg9wi8yOqG1auXCyjMDkiVBgGT6ciNa6DxXFKOHk5hpZjfY5NvWkfh2PxCYe5FnvO8s3bZGaGIdlk7EwBm1PSnDtFic2CyE+2mUEeYgdetRLHGSpvg0U3Hc5MrmN1P7I39R/tUlu2x3VTqBoPdV38z+Gcpyjxcteg1XUVBh7arcVjmADAwCANPKPKrM3KLI2u5CVKMI8o+2K0bGDmrfAfjRbiGHW8z3RmUKBzA6z9lQ4jhOVS0kADbL5eomqVsz9m6t/cNfk3uK+Ifw7WjuP66fvot224jdw93D3LAiM+aBoRNvwsOYNDewWEQXLhaHGQbqNNQepqLt9ZTvLQUBNH0VRrqsTBFYzwqUtT+h0QyKMaQ78A47axtuV8LjRkO45e9fOlftX2N3u4ZBO7W50PmnQ/1efLzD8Hxf0e2wViLikssLrtrInbeaeuAdoreKSNnA8S9P6w8q87Ljn4WWuHunVGccqqXJx/MedoxzMHTUjXpqCPdWhu6wEnfaeQkn4An3V1DtF2ZGJJ7vOLnMJqtzSRmHXXf40l8P7HXbzuoYJ3ejm7+jAO4Ek7wJ+dehhzLKrRy5UsfIGthm9myxOh0VjoRIOnUajrXWewzL9CsEyurcz1euW4rh7W2Ze9Eg/VaVMSJlTDb7jrXQezVtRgrIJYGTLK0aeM8zA5cq0yY3NUTDLFboqX+B4fFXL169iTYIdVjuy40tJ0OnXXfMK0HYzCDbiK++yf9dCOI8Sy2symC15uRD6WrI1Px90VJZwb27WHu52vtdy/o1YsZZSwBWZkAb7V0pYlFWnfoZ3K+UE37H4b/ANyt/wDxH/XUJ7GYf/3K177RH/8ASpcZ2Q4hlN1VPi1yC6AVEdM518p+NK6Xbilhca4GAgAlpzTBG++u1U+klupAnJ8NDFb7GWZn85YfnuI3BH6/nUV7sFdyA2sVhbqqTr3mXeNNiOXWgPD8fd/SBrjnwke2wI28Qg76R76PWe2rZYjKApDAc5Ovvk76fcM8zjGKcIt36iTbbXkOHZ61dsWil1rdttTlW5bI15iNgTJjzpA7bgtiLUSxOHsxAkn2hpG9Wr+Oe/aN2XDq7ZSD4QsFoOusRTL+T/FW7xz37Vi7dVcqG5bLEKvmDEancVzanff6nSox03av5HPMXw3EWgGvWbiA6hipHpJ2nyOtH+z/AGQu4u13ts28uYr4mIMiOUeddes38FeBBXBwZkNZIBhihBzf1lPXrQvDXcPbzDDWEW2Wb+TLqpYHKxCkHLqscttq00P40YtrsJfB7ZW09zEqLgDKyWmuBGls0ksslBGpA5gDSmdsXw5rJuAILcAjObvdIGgAb5FBnluTzpzbF2du8B+J/wC2ocTewpHjKHyKTPuK60Rk0W4pnPrvHMKmGxC2bQtOBnUpaLhj4+7vbNk1De0dN+orTh3FrX0Q3Ltlzc7pbjFW7s3Wlc4ADA7wT11EGILVxG5hSIWwWDE58uH0ZcrAhsurDUaGk7jCItk93auC+xuEN3ZRFlyU0YRGXLvJERodameT5C00he7M4pbN69iLuFa4vK30LNmknQeEKZ9RpzHTON4vEWVtXbV20ttWCsgXxOGZEsoMukCT02XeuV4EZVkpDFh4piN58IMEQenIUXw9rA92y3bcXIJRkuOWkAwWCtkGoBEHSdRO0KeqLjdBGXtXIahjLNzEtiFKjOO7uowhg6n2t5g+L+DpvjFRMRaLXRbtBWLBoMs2YCPDoYn+JlGXA2oBGIBEAtIIjQEwCBMeLrMCnPh2Jt3Da71mLCScyyZJHiLKAMpCAa+dYY8miOmTv1ZpKalK+Df8oNg2cHNtmnOgkcgATP8Ahotw62LlorqrrE54MxbVMwInSbbDXXw670axOCtXgssuUGSMm+hEe0NNagvLh8PktsR4wRPiJJAGsZ4PM/71v1Eo2+BJpJiXj8EznwFY9T5jpWmAtIhNu5ZF14DCLjLC6hpjQiJOvSmjC2rEEGxtpmELIMyYGxA+00I4qtvD3w1lSxeepywoAY/q6aft+RrL9TBrbciKinYI7RYDKyMiZbbXba6wTGYhomdYE1bv92EWzcsi4lubi5XIhWdjMZQNlMiCPnTBw3h63MOYKPc9tS+oW5rkaBO0jnyrUcBe3dXu7arYOY3FLA5iQ3VyV846/C01KEW+V/w1jVutrFniIt4drN1IdTkO+rZ5UgZTJgjYD6o9CSx/Cu4QXXXOi5Yt23YAHLznWMwGx159KmXszatdw3eWkNsMWJXNnYiFJ8WsBlgwDpRjFtbZVlgQpQwRudCV0Mey3Mj301lxqW7W3qQ7aqxfbsGRZBLMAB4myEiDk1VAMxOm0R5iq3Cuzl7vkttggMPm/Svcu+JwslTlF1Qs6gDK0Zt+dXeH8Qxi3gbwv3EZXLLk8CEEZBaMAERICgkkQepq9b7R2mBItYgRvmsuvwkCfdWqaIUQZwXs3iWuIuKwuDXDljnVXIYAqw8JW5vt7pqa92e7zFMlq4v0YMJa1ezOvhJCsruZ8Q3H6uxkx7xbid1ihtXXwyQxZ4TOW8OVfFmgRmJEawBO9Zhu3/isWLtlu+dbcnu1UMWn2REgGCZJ01nY03IqMUD1v2zdVLNoB2tsiS7FWZQwUasddI9cvvD8QtsbzW71kG6gBYBj4EUrcY+TZdZGsMNd6cW7PKlxbgyGLly6xkzLOrbAHMYUjSZLab1nFOANcu3L4DZirICASMhsmGHh/XyiN9IjWs5SU0l5F+Hh0V7XtNp89vkLnA7OHuIDcw4W7eaUAU+G2GRCUJaZPea9ZHPWl21wHFWWDrYvKy7EIT7tNx5U1pwPEG7gbDAqyvffOTlLWxftsoG0kwpykc9pFdBx1m8iEr4iYUDOwEkwJMaAbk9BzOlXJR+pO7Oe4HjN8XLVsXEVneCoJUPMKSJUh1QT9bUjYVLx5bV63dF9mZwk24uR4p/VAho3g8jpqQRct9l7gtWrZHeNhTcyMFac+exetwQNJykTO29Q9ouDcRv3Ce58P82UcAqM8+LPlMkAabVlo06dL4vbsXqUtprZgS9wiwVt5bTObaNbugvBzwhBAlQB7UbHqJ1N7gGCJsXLT24VUI0hjLZghWJIgxr7tiaauy3CFw6XlbRi3eXHuSZbIucAx4gDOokb61Yv37eY93ctiFaYXRiYgctBrJO2nWk3KKco8hoTnT4OXcStBsPaYIHez3jOFAAGQkmTEMcuXXXcVFhMfdD2wCYFtTaAUADwSCM2xiRI5ij6YfDqHQY22/eFs5y5UylASgJYmYUtpzAG0kDeA4b6bcK28OoIHhl4UqBkIE+HMIkgdZ8621andULZKnueYntfiCTbS6JQgSVBY+HWZB2Omhqlx3Cs1wXb12yc4UjK430Uq3gWCJ3AOgmdKlu9krivehla7FzMs5QpUMzEGY0yn1qxxXgCXEDvktW0C5iLjFZJCK8FZBJYCNhPITWjyaoqNmWlKTkkAvzebjhLBU6lGkBPFqcoEnMAPrefpXmF4VcwxZ8Rbi3EZjqN9wN9esUY4Xwu5fuqLeVnthygF1SWm3lMRBOiruFO+9WcbwC6V7k5CzFAPGYY95lgmdNQw5T86huSqP2LWmTsjxmDs2cO1u2LuYgv3jABMzFQLaCCCMrblhsT5VJ2GxS2GNq61xM7onh0ILKzHMSRlWBqatHs7xMoUa1bKW3t5SWRlCqjowjMZAMGDz86s8M7O3sTdd3DIjPN26wgkxqtsHU+UddTpFLaXYTWmtw72fwH0vFXIvM9pFy6L+i2HtE/XJ+qOk7bNidk0AjvojkF/fWYPu8PaW1ZUKi7AfMk82PM1Dd4qAY191XTE5A18KRtYJP/ADX/ANYFVsRw66/80o9Xzf5lb4Ux5qzNWZoKg4Vf/ox7in3ItbpwhyfEjg8iH0/z/dTTNZpSCwXY4QpEM7gdM06+cgj4Vsez1kg6KSeZVD/2A0Ryit+5PL5EUqCwPhuy9tCSMsmIi2IHWBn51abgakEQpB3kMNOkhjV02iOR+Fais3hxvlINip+a2EBcgA6XGDcv1h6860/NOpJVyTz7xD91ERcbqa9741D8Lifwi28gJiOD3Dor3lHPKoZv72b+PfVXHdm1uAC5maJ9q0QR75iNtI/cy9+eg+FbDFHp9v4014eC4QVEWOFcJ7iCLwnmNQDqTrp5j4VNjsDcvsrd4qwpEKx5lTOuk+Ea0yfTfX414b6HdF94n7TS6CYVETMX2V7zIXcEKIMNuNY3Oh1+Vaf8M5lIBck8yZ0J1gjnqfKnI92fqp/cFeCxb5KvuzD7KiXhFLuw0oEjCv3a2wGUIVI33UzrO/v9eVE7b75iwn4faIqf6AsQEI9C331SfgdvNni4pE7XIqo4pw+IaSJ7l4Qf0h9wk0qXcTfVbmZz7UqZghQXO8zzGhn5U1fRdIFy58QfsiomwDyD31znoUkH18VLJiyT7/b/AGGkRk4jduMN8+Uwc+h1PQ66gcjoaI8I4vdbvAyEZYXxCdhqZiOnz30po+hPOrqega0NOsb1uuEuERmtN1kQSephKyj4WUXcWOhJv9pXtFhEgSIyACMzgTrJGgHzrbEdoGS44JSC0KVj0ygegbrqPOnJ+GOfaSy0bSCY9JXSo34SDM4e0Z3jT46iiXhpte8/qx0hUu8YuqFkqoOUwdyCG8InYzH7qg/4zyuikAg5wxiIjRT7XUE+hptucJUkE4ZCeRziR6S9R4jgyMAGwwMCBBUkeh1IOgqIYMsfif1FQCTtOwygQxaNdQBoJ5jeZg+fTTMD2hGYJlDSxURIhiSQB4oO410ovY4BZT/y1wkgiZk6gCNv49alw3C7NsyuEfzOVjOsyZXU+dNYcyd62PSS8WZLdtrjW2J00JOpOgEn1pcs9olCk2rQjUdJhQSQc3s6iASN/Kj/AB+wuJtd06XUU9Aekc1j/agPDezOGtal7jGR7eogCIIBAPPetsyySdxdBpAnGu1hVJS3azc2iSGBGZdT5HXaGFNeAxuHuLbAtgtdAOVUBEaE5jqIWRJnfTfSg/Fuy9h4AulVAOhRSdfPOPPlzobhOzZtMGs4xkIEDKIgGJjxc4Hwq8WpLfcnSx+s4K0hlEVTESFUGDuJAmgPHvoWHZXuW1zO3tcgZEkwPM1Vv4q8iycc+mmoJB84AkUv8XsLiyvfYwOyBss+HU/sbaeZ0rZ/IHFDBgu2i3MOxVSGtliVJMELbdgZ2g5dB0Iqz2Tx5uL9JxTXCbnsKplUTqFJABPXpHU0D7K9mMOBdD3JL6BlkqEOhUjTUmdR5ecsuLWzaT+WQW0G+UgBR6wBHrWkNhN1Gvv6BcYzCH+cuD1T8JrWMHrOI+KN+Fc9vdvMCphUv3P6ygAe7NFSJ29wEai8vkUk/EAirszo6RNZNZWVkaHmavMxrKygDYE1haN6ysoA9zEdRWwxDdT79ayspge9/wCQ+ArTNWVlID1dTEE+lSHDP+qayspiNO7PNT8K3U2+Yb5V5WUgM7xBsPlrUgxI6H+PjXtZQB5346/x/dFbC+Oo+X+qsrKANu86ff8AcDXmbrPxb7wK8rKYGHFAfwD99RPjjyHx/dWVlIZF9Ib+AK2OKbnr6isrKVDs8+keQrPpA/VHz/GvaymKzO/H6vzNYL69D8f3VlZQOzcYgdW+P7qxr0iM7j0P4GsrKAspvhSdsTfA6Egj5zVK7wFTqt5gfNFP2AVlZRQWaf8ADi/0yz/yh/prY9mrR3cH9lf9IrKyih2Rr2dySbfd7aRoSeUyYFIvb3D37lllCMqWyHvZvD4QYWJ9sTB8M7CvKyhCBPZPgli4odySylXZO7zgoWKoBuIJUzAkeVFLvY1LxNyy1tEJMK1skjXlkuKIO40mCKysrTuQf//Z",
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
    imagem: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/1d/92/71/praia-do-futuro.jpg?w=1200&h=-1&s=1",
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
    imagem: "https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.1325998:1590117036/image/image.jpg?f=16x9&h=574&w=1020&$p$f$h$w=3c48500",
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
    imagem: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/ee/40/05/galpao-do-mercado.jpg?w=1200&h=-1&s=1",
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
    imagem: "https://www.dicasdeviagem.com/wp-content/uploads/2024/06/estatua-de-iracema-fortaleza-1024x685.jpg",
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
    imagem: "https://www.ceara.gov.br/wp-content/uploads/2024/08/Parque-do-Coco1-1.jpg",
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