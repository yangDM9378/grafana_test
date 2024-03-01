# grafana_test

- 해당 repo는 Grafana를 Custom test를 진행해보기 위한 test repo이다.
- (03.01) 초기 환경은 local에서 조성하고 추후 docker 기반으로 수정할 예정이다.

## 버전 정보

- Grafana v9.3.15
- Promethues v2.50.1
- window_exporter 0.25.1

## 활용 도구 설명

### 1. Grafana

- 오픈소스 메트릭 데이터 시각화 도구로 plugin을 통해 다양한 데이터 소스와 통합하여 사용가능하다.

### 2. Prometheus

- 오픈 소스 모니터링 경고 도구이다.
- 시각화 기능 및 알람 기능 지원한다.
- Grafana의 시각화 기능 및 쿼리 조회기능이 뛰어나 시각화로는 Grafana를 사용할 것이다.

### 3. Window-exporter

- windows에서 metric 데이터(cpu, memory, disk, process 등)를 불러오기 위해 설치하는 metric 수집 agent이다.
- grafana로 시각화 하기 위해 Prometheus와 Window-exporter를 연동하고 Grafana의 Prometheus 데이터 소스를 통해 Grafana를 통해 시각화할 것이다.
