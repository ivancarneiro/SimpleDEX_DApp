# SimpleDEX-DApp: Intercambio de Tokens Descentralizado (🪙🔄🪙) con 🏗 Scaffold-ETH2
## Descripción General
SimpleDEX es un proyecto de intercambio descentralizado (DEX) implementado usando Scaffold-ETH2, compuesto por tres contratos inteligentes independientes: SimpleDEX, TokenA y TokenB, diseñados para realizar intercambios de tokens utilizando la fórmula de producto constante.

## 🚀 Inicio Rápido

### Requisitos Previos
- Node.js (v18+)
- pnpm
- Wallet compatible con Ethereum (MetaMask, WalletConnect)

### Instalación

1. Clonar el repositorio
```bash
git clone https://github.com/tu-usuario/SimpleDEX-DApp.git
cd SimpleDEX-DApp
```

2. Instalar dependencias
```bash
pnpm install
```

3. Arrancar el entorno de desarrollo local
```bash
pnpm run dev
```

## 🔧 Contratos Inteligentes

### 1. SimpleDEX.sol
- **Ubicación**: `packages/hardhat/contracts/SimpleDEX.sol`
- **Funcionalidad**: Contrato principal de intercambio de tokens
- **Características**:
  - Gestión de liquidez
  - Mecanismo de intercambio de tokens
  - Cálculo de precios mediante fórmula de producto constante

### 2. TokenA.sol
- **Ubicación**: `packages/hardhat/contracts/TokenA.sol`
- **Funcionalidad**: Contrato del primer token ERC20
- **Características**:
  - Implementación estándar ERC20
  - Minteo inicial
  - Gestión de suministro

### 3. TokenB.sol
- **Ubicación**: `packages/hardhat/contracts/TokenB.sol`
- **Funcionalidad**: Contrato del segundo token ERC20
- **Características**:
  - Implementación estándar ERC20
  - Minteo inicial
  - Gestión de suministro

## 🛠 Desarrollo

### Comandos Principales
- `pnpm run dev`: Inicia el entorno de desarrollo
- `pnpm run test`: Ejecuta pruebas de contratos
- `pnpm run deploy`: Despliega contratos en red seleccionada

## 🔐 Seguridad

### Consideraciones
- Solo el propietario del contrato puede añadir o retirar liquidez
- Protección contra ataques de reentrancy
- Requiere aprobaciones de tokens antes de transacciones
- Validación de montos y niveles de liquidez

## 📡 Despliegue

### Requisitos
- Despliegue de TokenA y TokenB
- Inicialización del contrato SimpleDEX con direcciones de tokens
- Aprobaciones de tokens suficientes
- Despliegue por el propietario previsto

## 🧪 Pruebas

### Ejecución de Pruebas
```bash
pnpm run test
```

## 📊 Eventos

- `LiquidityAdded`: Activado al añadir liquidez
- `LiquidityRemoved`: Activado al retirar liquidez
- `TokenSwapped`: Registrado en cada intercambio de tokens

## ⚠️ Limitaciones

- Par de trading único
- Liquidez controlada por el propietario
- Sin características avanzadas de AMM
- Cálculo de precios simplificado

## 📄 Licencia
MIT License

## 🚧 Disclaimer
Esta es una implementación educativa/experimental de DEX. Su uso en producción requiere una auditoría exhaustiva y características adicionales.

## 👥 Contribuidores
- Ivan Carneiro

## 📞 Contacto
[información de contacto o redes sociales]
