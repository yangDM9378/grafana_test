# grafana_test

- 해당 repo는 Grafana를 Custom test를 진행해보기 위한 test repo이다.
- test 개발 예정 페이지 정보
  - Test1. 전체 발생한 Alarm에 대한 발생 정보를 제공하는 Alert History Page
  - Test2. 서버 연결 가능한 Admin page 개발
  - Test3. 서버 연결 정보 확인 가능한 Main page 개발

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
- 빌드시 오류 발생 (go 환경 변수 등록 경로 문제)
```bash
export GOROOT=/usr/local/go
export GOPATH=$HOME/go
export PATH=$GOPATH/bin:$GOROOT/bin:$PATH
```

- grafana의 경우 go와 yarn을 실행 필요
- 초기 빌드 후 bin/grafana-server를 실행 가능
- frontend 코드 수정시 재시작 필요

## flask Python API 서버 실행

- python 설치 필요
- python 가상환경 설치 후 flask 설치

```bash
python3 -m venv .venv
source venv/bin/activate
pip install -r requirements.txt
```
- 빌드시 오류 발생 (go 환경 변수 등록 경로 문제)
```bash
export GOROOT=/usr/local/go
export GOPATH=$HOME/go
export PATH=$GOPATH/bin:$GOROOT/bin:$PATH
```

- grafana의 경우 go와 yarn을 실행 필요
- 초기 빌드 후 bin/grafana-server를 실행 가능
- frontend 코드 수정시 재시작 필요


## test 용 custom 페이지 생성 (localhost:3000/test)

- router를 통해 /test 경로 지정이 필요
- grafana/public/app/routes.tsx에서 경로를 통해 tsx 또는 jsx 파일 import하여 적용
- 백엔드 프론트엔드 재빌드시 적용

# Custom Test 1. 전체 발생한 Alarm에 대한 발생 정보를 제공하는 Alert History Page

- /grafana/public/features/test/testAlertHistory.tsx 개발


## 개요

- grafana의 알람의 경우 Alert Rule 별로 Alert의 상태를 기록하는 기능 존재
- 모든 Alert Rule에 대한 Alert가 언제 발생했고 어느 대시보드와 관련이 있는지 한번에 볼 수 있는 페이지 부재

## 개발 방향성

- 기존 grafana에서 발생하는 Alert는 Alert Rule을 설정하고 Alert Rule의 기준에 따라 Alert가 발생
- grafana db의 alert_rule에 알람 설정 시 데이터 적재
- grafana db의 annotation에 알람 상태 변경 시 데이터 적재 (대시보드의 패널의 annotation도 같이 적재 됨)
- grafana backend API에서 Alert History Page 기능 구현을 위해 필요한 API를 사용하여 구현

## 기능
- grafana alert를 통해 울린 모든 alarm의 정보를 화면에 전시

## 화면 구성안

- grafana에서 Alert-rule에 의해 발생하는 Alarm의 alarm rule 정보, 대시보드 정보, 알람 발생 시간 정보를 제공
- 날짜별로 발생한 알람을 분류하여 정보 제공

# Custom Test 1-1. Alert History Page Flask로 통해 로직 이전

- /grafana/public/features/test/testAlert/refactoringTestAlertHistory.tsx 개발
- /backend/alarm_History_API.py 개발

## 개요

- 백엔드에서 로직을 처리하여 프론트엔드에서의 성능 향상
- 백엔드에서 원하는 형태의 json 파일로 프론트엔드에서는 해당 데이터를 보여주기 위해서 개발

## 개발 방향성

- 기존의 frontend에 있던 Alert History 로직을 backend로 이동
- backend에서 frontend에서 보여줄 데이터를 처리하여 json 형식으로 전송

## 기능

- 기존 Alert History Page와 동일

## 화면 구성안

- 기존 Alert History Page와 동일

# Custom Test 2. 서버 연결 가능한 Admin page 개발

## 개요

- grafana의 경우 대시보드를 생성하기 위해 plugin을 통해 datasouce와 dashboard를 생성하는 과정이 필요
- 많은 plugin 중 실제로 사용할 plugin은 몇개 되지 않는데 사용자가 직접 설정할 경우 많은 plugin 중 선택해야하는 문제 (promethus를 기본으로 하는 datasource를 생성하도록 custom)
- 특정 exporter에 따른 dashboard template을 통해 정해진 dashboard를 생성
- dashboard를 연결된 exporter가 설치된 서버라고 생각하고 

## 개발 방향성

- grafana의 내부 api(/swagger)를 통해 datasource를 생성 (promethus로 생성)
- datasouce를 생성 후 해당 template 양식(Json 파일)을 통해 dashboard 생성

## 화면 구성안

- 서버를 담는 Rack 생성 버튼 클릭 시 빈 Rack 생성
- Rack 클릭 시 Rack에 생성한 서버 리스트 전시
- 서버 추가 버튼 클릭 시 iP주소 / 서버 명 / Template 선택 하여 datasource와 dashboard 생성

# Custom Test 2-1. Rack 및 Dashboard DB 설계 수정

## 개요

- 초기 Rack과 Dashboard(서버) DB 설계에 오류 발견
- 기존 설계의 경우 Rack에서 Dashboard의 전체 uid를 리스트 형태로 가지고 있어 Dashboard를 삭제 시 Rack에 Dashboard 정보를 지워야 하는 문제 발생
- 해당 문제를 Dashboard 테이블에 rack_id column을 만들어 문제 개선

## 개발 방향성

- 기존 flask 로직을 개선하고 Rack 테이블의 Dashboard 정보를 저장하는 필드를 삭제
- Dashboard 테이블에 rack_id 필드를 추가하여 rack의 고유 id를 저장하게 변경