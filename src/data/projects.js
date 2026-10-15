import { ShoppingBag, Warehouse } from "lucide-react";

export const projects = [
  {
    id: "delivery",
    title: "Plataforma Delivery Axion Food",
    description: "O Axion Food é uma plataforma de pedidos online que conecta clientes a restaurantes em uma experiência simples e organizada.\n\nA aplicação reúne busca de estabelecimentos, cardápio digital e sacola de compras, com opções de entrega ou retirada. A interface facilita a escolha dos produtos e a montagem do pedido, mantendo as principais ações acessíveis durante a navegação.",
    category: "Delivery",
    techs: ["React", "Tailwind", "API"],
    icon: ShoppingBag,
    url: "https://delivery.erpaxion.com.br/",
    unavailable: false,
    objective: "Facilitar a descoberta de restaurantes, a escolha de produtos e a montagem de pedidos para entrega ou retirada.",
    scope: "Busca de restaurantes, cardápio digital, sacola de compras, acesso à conta do cliente e integração com API.",
  },
  {
    id: "distribution",
    title: "ERP AXION",
    role: "Desenvolvimento do frontend e integração com a API, em colaboração com um desenvolvedor responsável pelo backend.",
    description: "O ERP AXION é o sistema de gestão empresarial que estamos desenvolvendo. AXION é o nome do sistema; ERP significa um sistema que reúne diferentes áreas da empresa.\n\nEle integra produtos, estoque, compras, vendas e PDV, emissão de notas fiscais, clientes e financeiro. Cada estabelecimento tem seus dados, e os perfis de acesso definem o que cada usuário pode consultar ou operar.",
    category: "Gestão empresarial",
    status: "Em desenvolvimento",
    techs: ["JavaScript com JSX", "React 18", "Material UI", "Vite", "C#", "ASP.NET Core", ".NET 9", "SQL Server / Azure SQL", "SQL"],
    icon: Warehouse,
    url: "http://app.erpaxion.com.br/",
    objective: "Reunir diferentes áreas da empresa em um sistema de gestão empresarial.",
    scope: "Produtos, estoque, compras, vendas e PDV, emissão de notas fiscais, clientes e financeiro. Dados por estabelecimento e permissões por perfil de acesso.",
  },
];
