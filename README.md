# LogiCore Supply Chain OS & Logistico Platform

**LogiCore** is an enterprise logistics and supply chain management platform. It provides end-to-end freight tracking, multi-warehouse inventory management, fleet telematics, route optimization, and 8 role-specific operational dashboards.

---

##  Key Features

- **8 Role-Based Dashboards**: Custom portals for Operations, Executives, Fleet Managers, Warehouse Supervisors, Drivers, Customers, and System Admins.
- **Automated Order Fulfillment**: Multi-warehouse split order fulfillment, priority allocation, wave releases, and backorder tracking.
- **Smart Route Optimization**: Haversine distance calculator, driver Hours of Service (HOS) rest planners, and axle weight distribution constraints.
- **Shipment Lifecycle Engine**: Automated SLA risk scoring, status progression, and exception alert detection.
- **WMS & Inventory Control**: Real-time bin allocation, safety stock thresholds, and RMA returns handling.
- **Fleet Telematics**: GPS tracking, vehicle health telemetry, speed alerts, and geofence monitoring.

---

## Project Structure
logicore_src/ │ 
├── 📂 public/ # Static assets and media files │
├── 📂 src/ # Application Source Code │ ├── App.tsx # Main React component entry point │ ├── main.tsx # App renderer root │ ├── index.css # Global styling (Tailwind CSS) │ ├── types.ts # TypeScript data interfaces (Shipment, Vehicle, Order) │ ├── mockData.ts # Initial demo dataset (Orders, Fleet, Drivers, Warehouses) │ │ │ 
├── 📂 components/ # UI Components & Page Layouts │ │ 
├── 📂 layout/ # App shell, navigation header, and role sidebar │ 
│ └── 📂 dashboards/ # 8 Role-specific portal views │ │ │
├── 📂 context/ # Global Application State │ │ └── LogisticsContext.tsx# State provider for shipments, fleet, & orders │ │ │ 
├── 📂 modules/ # Enterprise Core Engines (17 Modules) │ │ ├── ShipmentLifecycleEngine.ts # SLA scoring & exception alerts │ │ ├── OrderLifecycleEngine.ts # Order splitting & fulfillment │ │ ├── RouteOptimizationEngine.ts # Route planning & driver HOS rest stops │ │ ├── FleetTelematicsEngine.ts # GPS & vehicle health sensors │ │ ├── WarehouseManagementEngine.ts# Bin allocation & wave picking │ │ └── TariffRatingEngine.ts # Freight cost & toll calculation │ │ 
│ └── 📂 enterprise/ # Domain Service Modules (3,900+ Files) │ ├── logistics-core/ # Core logistics interfaces & models │ ├── warehouse/ # Storage & inventory workflows │ ├── fleet/ # Vehicle telemetry & maintenance │ └── billing/ # Invoicing & payment reconciliation │ 
├── 📂 tests/ # Automated Unit Test Suites │ ├── shipmentLifecycle.test.ts │ ├── orderLifecycle.test.ts │ ├── routeOptimization.test.ts │ └── mockData.test.ts │ ├── package.json # Project dependencies & scripts ├── vite.config.ts # Vite server & build settings └── vitest.config.ts # Vitest unit test & coverage configuration

---

##  Tech Stack

- **Frontend**: React 19, TypeScript 5.8
- **Styling**: Tailwind CSS 4, Motion, Lucide Icons
- **Build Tool**: Vite 6
- **Testing**: Vitest 2, V8 Code Coverage (`@vitest/coverage-v8`), jsdom

---

##  Quick Start Guide

### 1. Installation
```bash
npm install
npm run dev
npm test
npm run coverage
npm run build
