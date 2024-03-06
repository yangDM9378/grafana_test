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

## Grafna 실행

- grafana/bin/grafana-server.exe 실행
- 3000번 포트를 통해 접속 가능
- 초기 아이디와 비번은 admin
- skip 버튼 눌러 접속

## Prometheus와 window-exporter 연동

- windows_exporter 실행: window-exporter.exe 실행
- 9182번 포트를 통해 접속 가능(localhost:9182/metrics를 통해 메트릭 수집 확인 가능)
- window-exporter와 연동을 위해 prometheus.yml 파일 수정

```
scrape_configs:

  - job_name: "window-exporter"

    static_configs:
      - targets: ["localhost:9182"]

```

- prometheus 실행: prometheus.exe 실행
- 9090번 포트를 통해 접속 가능(localhost:9090)
- localhost:9090의 Status의 targets에서 window-exporter와 연동 확인 가능

## Grafana와 Prometheus 연동

- 사이드바의 Configuration의 Data sources를 통해 prometheus와 연동 가능
- add data source 클릭 후 Prometheus 선택
- prometheus의 URL입력 후 test&save 클릭
- prometheus의 Datasource 생성 확인

## Grafana 대시보드 생성

- 대시보드 생성을 위해 데이터 소스가 필요
- Prometheus의 datasource를 사용하여 대시보드 구현
- 사이드바의 Dashboard의 New dashboard 클릭
- Add a new panel을 통해 패널 생성
- Data source를 선택하고 시각화할 Metric 선택(PromQL이라는 Prometheus 쿼리를 통해서도 데이터 시각화 가능)

## Grafana Build 환경 세팅
- window의 wsl을 통해 Ubuntu 환경을 구축하여 진행
- Grafana의 일부 커스텀 플러그인 개발 등 리눅스 환경에서 지원 부분이 있기 때문 
```bash
chmod -R 777 *
sudo apt-get -y update
sudo apt-get install -y curl
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs git build-essential
sudo npm install -g n
sudo n 16.14.2
sudo npm install -g yarn
wget https://golang.org/dl/go1.19.4.linux-amd64.tar.gz
sudo tar -C /usr/local -xzf go1.19.4.linux-amd64.tar.gz
```

## Grafana Build
- go 기반의 백엔드로 go build가 필요
```bash
export PATH=$PATH:/usr/local/go/bin
cd ~/grafana_test/grafana
make run
yarn install
yarn start
```
- grafana의 경우 go와 yarn을 실행 필요
- 초기 빌드 후 bin/grafana-server를 실행 가능
- frontend 코드 수정시 재시작 필요

## test 용 custom 페이지 생성 (localhost:3000/test)
- router를 통해 /test 경로 지정이 필요
- grafana/public/app/routes.tsx에서 경로를 통해 tsx 또는 jsx 파일 import하여 적용
- 백엔드 프론트엔드 재빌드시 적용

