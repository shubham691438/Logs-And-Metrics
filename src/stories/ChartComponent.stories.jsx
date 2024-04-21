import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ChartComponent from '../components/ChartComponent';

export default {
  title: 'components/ChartComponent',
  component: ChartComponent,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => (
  <Router>
    <ChartComponent {...args} />
  </Router>
);

export const CPU = Template.bind({});
CPU.args = {
  searchParams: {
    get: () => '5',
  },
  setChanges: () => {},
  data: {
    "name": "CPU Usage",
    "graphLines": [
        {
            "name": "Limits",
            "values": [
                {
                    "timestamp": 1713680800000,
                    "value": 91.63
                },
                {
                    "timestamp": 1713680805000,
                    "value": 99.53999999999999
                },
                {
                    "timestamp": 1713680810000,
                    "value": 86.7
                },
                {
                    "timestamp": 1713680815000,
                    "value": 93.48
                },
                {
                    "timestamp": 1713680820000,
                    "value": 88.4
                },
                {
                    "timestamp": 1713680825000,
                    "value": 95.78
                },
                {
                    "timestamp": 1713680830000,
                    "value": 97.49
                },
                {
                    "timestamp": 1713680835000,
                    "value": 95.75
                },
                {
                    "timestamp": 1713680840000,
                    "value": 97.24
                },
                {
                    "timestamp": 1713680845000,
                    "value": 88.78999999999999
                },
                {
                    "timestamp": 1713680850000,
                    "value": 98.25
                },
                {
                    "timestamp": 1713680855000,
                    "value": 98.57
                },
                {
                    "timestamp": 1713680860000,
                    "value": 81.92
                },
                {
                    "timestamp": 1713680865000,
                    "value": 99.96000000000001
                },
                {
                    "timestamp": 1713680870000,
                    "value": 97.02
                },
                {
                    "timestamp": 1713680875000,
                    "value": 89.78999999999999
                },
                {
                    "timestamp": 1713680880000,
                    "value": 95.23
                },
                {
                    "timestamp": 1713680885000,
                    "value": 85.12
                },
                {
                    "timestamp": 1713680890000,
                    "value": 88.61
                },
                {
                    "timestamp": 1713680895000,
                    "value": 89.28999999999999
                },
                {
                    "timestamp": 1713680900000,
                    "value": 86.29
                },
                {
                    "timestamp": 1713680905000,
                    "value": 94.43
                },
                {
                    "timestamp": 1713680910000,
                    "value": 81.34
                },
                {
                    "timestamp": 1713680915000,
                    "value": 83.95
                },
                {
                    "timestamp": 1713680920000,
                    "value": 87.81
                },
                {
                    "timestamp": 1713680925000,
                    "value": 99.68
                },
                {
                    "timestamp": 1713680930000,
                    "value": 90.02
                },
                {
                    "timestamp": 1713680935000,
                    "value": 84.13
                },
                {
                    "timestamp": 1713680940000,
                    "value": 86.74
                },
                {
                    "timestamp": 1713680945000,
                    "value": 97.67
                },
                {
                    "timestamp": 1713680950000,
                    "value": 87.67
                },
                {
                    "timestamp": 1713680955000,
                    "value": 90.62
                },
                {
                    "timestamp": 1713680960000,
                    "value": 94.87
                },
                {
                    "timestamp": 1713680965000,
                    "value": 82.49
                },
                {
                    "timestamp": 1713680970000,
                    "value": 91.58
                },
                {
                    "timestamp": 1713680975000,
                    "value": 81.98
                },
                {
                    "timestamp": 1713680980000,
                    "value": 82.37
                },
                {
                    "timestamp": 1713680985000,
                    "value": 84.28
                },
                {
                    "timestamp": 1713680990000,
                    "value": 91.78
                },
                {
                    "timestamp": 1713680995000,
                    "value": 94.35
                },
                {
                    "timestamp": 1713681000000,
                    "value": 88.21000000000001
                },
                {
                    "timestamp": 1713681005000,
                    "value": 89.64
                },
                {
                    "timestamp": 1713681010000,
                    "value": 92.78999999999999
                },
                {
                    "timestamp": 1713681015000,
                    "value": 87.49
                },
                {
                    "timestamp": 1713681020000,
                    "value": 88.43
                },
                {
                    "timestamp": 1713681025000,
                    "value": 97.48
                },
                {
                    "timestamp": 1713681030000,
                    "value": 89.59
                },
                {
                    "timestamp": 1713681035000,
                    "value": 87.02
                },
                {
                    "timestamp": 1713681040000,
                    "value": 94.6
                },
                {
                    "timestamp": 1713681045000,
                    "value": 98.38
                },
                {
                    "timestamp": 1713681050000,
                    "value": 93.35
                },
                {
                    "timestamp": 1713681055000,
                    "value": 84.75
                },
                {
                    "timestamp": 1713681060000,
                    "value": 92.03999999999999
                },
                {
                    "timestamp": 1713681065000,
                    "value": 94.93
                },
                {
                    "timestamp": 1713681070000,
                    "value": 98.64
                },
                {
                    "timestamp": 1713681075000,
                    "value": 82.84
                },
                {
                    "timestamp": 1713681080000,
                    "value": 87.83
                },
                {
                    "timestamp": 1713681085000,
                    "value": 81.16
                },
                {
                    "timestamp": 1713681090000,
                    "value": 89.65
                },
                {
                    "timestamp": 1713681095000,
                    "value": 93.97
                },
                {
                    "timestamp": 1713681100000,
                    "value": 92.32
                }
            ]
        },
        {
            "name": "Requested",
            "values": [
                {
                    "timestamp": 1713680800000,
                    "value": 40.14
                },
                {
                    "timestamp": 1713680805000,
                    "value": 61.239999999999995
                },
                {
                    "timestamp": 1713680810000,
                    "value": 47.57
                },
                {
                    "timestamp": 1713680815000,
                    "value": 63.370000000000005
                },
                {
                    "timestamp": 1713680820000,
                    "value": 66.84
                },
                {
                    "timestamp": 1713680825000,
                    "value": 59.379999999999995
                },
                {
                    "timestamp": 1713680830000,
                    "value": 75.50999999999999
                },
                {
                    "timestamp": 1713680835000,
                    "value": 72.4
                },
                {
                    "timestamp": 1713680840000,
                    "value": 50.7
                },
                {
                    "timestamp": 1713680845000,
                    "value": 75.2
                },
                {
                    "timestamp": 1713680850000,
                    "value": 46.16
                },
                {
                    "timestamp": 1713680855000,
                    "value": 71.98
                },
                {
                    "timestamp": 1713680860000,
                    "value": 57.29
                },
                {
                    "timestamp": 1713680865000,
                    "value": 54.25
                },
                {
                    "timestamp": 1713680870000,
                    "value": 75.44
                },
                {
                    "timestamp": 1713680875000,
                    "value": 69.39
                },
                {
                    "timestamp": 1713680880000,
                    "value": 69.99
                },
                {
                    "timestamp": 1713680885000,
                    "value": 40.23
                },
                {
                    "timestamp": 1713680890000,
                    "value": 83
                },
                {
                    "timestamp": 1713680895000,
                    "value": 75.59
                },
                {
                    "timestamp": 1713680900000,
                    "value": 75.00999999999999
                },
                {
                    "timestamp": 1713680905000,
                    "value": 42.22
                },
                {
                    "timestamp": 1713680910000,
                    "value": 68.3
                },
                {
                    "timestamp": 1713680915000,
                    "value": 74.1
                },
                {
                    "timestamp": 1713680920000,
                    "value": 75.32
                },
                {
                    "timestamp": 1713680925000,
                    "value": 63.92
                },
                {
                    "timestamp": 1713680930000,
                    "value": 67.62
                },
                {
                    "timestamp": 1713680935000,
                    "value": 57.07
                },
                {
                    "timestamp": 1713680940000,
                    "value": 40.99
                },
                {
                    "timestamp": 1713680945000,
                    "value": 82.53
                },
                {
                    "timestamp": 1713680950000,
                    "value": 53.79
                },
                {
                    "timestamp": 1713680955000,
                    "value": 60.78
                },
                {
                    "timestamp": 1713680960000,
                    "value": 43.85
                },
                {
                    "timestamp": 1713680965000,
                    "value": 62.58
                },
                {
                    "timestamp": 1713680970000,
                    "value": 54.81
                },
                {
                    "timestamp": 1713680975000,
                    "value": 78.91
                },
                {
                    "timestamp": 1713680980000,
                    "value": 77.9
                },
                {
                    "timestamp": 1713680985000,
                    "value": 81.02000000000001
                },
                {
                    "timestamp": 1713680990000,
                    "value": 53.8
                },
                {
                    "timestamp": 1713680995000,
                    "value": 77.03999999999999
                },
                {
                    "timestamp": 1713681000000,
                    "value": 49.05
                },
                {
                    "timestamp": 1713681005000,
                    "value": 70.41
                },
                {
                    "timestamp": 1713681010000,
                    "value": 66.92
                },
                {
                    "timestamp": 1713681015000,
                    "value": 56.29
                },
                {
                    "timestamp": 1713681020000,
                    "value": 76.97999999999999
                },
                {
                    "timestamp": 1713681025000,
                    "value": 70
                },
                {
                    "timestamp": 1713681030000,
                    "value": 69.98
                },
                {
                    "timestamp": 1713681035000,
                    "value": 68.22
                },
                {
                    "timestamp": 1713681040000,
                    "value": 69.08
                },
                {
                    "timestamp": 1713681045000,
                    "value": 75.93
                },
                {
                    "timestamp": 1713681050000,
                    "value": 42.43
                },
                {
                    "timestamp": 1713681055000,
                    "value": 44.26
                },
                {
                    "timestamp": 1713681060000,
                    "value": 70.05
                },
                {
                    "timestamp": 1713681065000,
                    "value": 68.14
                },
                {
                    "timestamp": 1713681070000,
                    "value": 71.09
                },
                {
                    "timestamp": 1713681075000,
                    "value": 66.82
                },
                {
                    "timestamp": 1713681080000,
                    "value": 52.86
                },
                {
                    "timestamp": 1713681085000,
                    "value": 77.58
                },
                {
                    "timestamp": 1713681090000,
                    "value": 74.77000000000001
                },
                {
                    "timestamp": 1713681095000,
                    "value": 64.75
                },
                {
                    "timestamp": 1713681100000,
                    "value": 50.28
                }
            ]
        },
        {
            "name": "Used",
            "values": [
                {
                    "timestamp": 1713680800000,
                    "value": 53.56
                },
                {
                    "timestamp": 1713680805000,
                    "value": 57.97
                },
                {
                    "timestamp": 1713680810000,
                    "value": 15.440000000000001
                },
                {
                    "timestamp": 1713680815000,
                    "value": 46.06
                },
                {
                    "timestamp": 1713680820000,
                    "value": 27.69
                },
                {
                    "timestamp": 1713680825000,
                    "value": 52.42
                },
                {
                    "timestamp": 1713680830000,
                    "value": 29.1
                },
                {
                    "timestamp": 1713680835000,
                    "value": 20.28
                },
                {
                    "timestamp": 1713680840000,
                    "value": 26.94
                },
                {
                    "timestamp": 1713680845000,
                    "value": 47.82
                },
                {
                    "timestamp": 1713680850000,
                    "value": 20.27
                },
                {
                    "timestamp": 1713680855000,
                    "value": 40.379999999999995
                },
                {
                    "timestamp": 1713680860000,
                    "value": 42.51
                },
                {
                    "timestamp": 1713680865000,
                    "value": 37.2
                },
                {
                    "timestamp": 1713680870000,
                    "value": 40.09
                },
                {
                    "timestamp": 1713680875000,
                    "value": 26.5
                },
                {
                    "timestamp": 1713680880000,
                    "value": 54.25
                },
                {
                    "timestamp": 1713680885000,
                    "value": 33.57
                },
                {
                    "timestamp": 1713680890000,
                    "value": 57.08
                },
                {
                    "timestamp": 1713680895000,
                    "value": 10.11
                },
                {
                    "timestamp": 1713680900000,
                    "value": 29.1
                },
                {
                    "timestamp": 1713680905000,
                    "value": 23.09
                },
                {
                    "timestamp": 1713680910000,
                    "value": 33.68
                },
                {
                    "timestamp": 1713680915000,
                    "value": 38.93
                },
                {
                    "timestamp": 1713680920000,
                    "value": 29.82
                },
                {
                    "timestamp": 1713680925000,
                    "value": 48.57
                },
                {
                    "timestamp": 1713680930000,
                    "value": 53.82
                },
                {
                    "timestamp": 1713680935000,
                    "value": 31
                },
                {
                    "timestamp": 1713680940000,
                    "value": 10.01
                },
                {
                    "timestamp": 1713680945000,
                    "value": 50.51
                },
                {
                    "timestamp": 1713680950000,
                    "value": 40.33
                },
                {
                    "timestamp": 1713680955000,
                    "value": 59.32
                },
                {
                    "timestamp": 1713680960000,
                    "value": 59.93
                },
                {
                    "timestamp": 1713680965000,
                    "value": 55.74
                },
                {
                    "timestamp": 1713680970000,
                    "value": 53.93
                },
                {
                    "timestamp": 1713680975000,
                    "value": 56.64
                },
                {
                    "timestamp": 1713680980000,
                    "value": 12.24
                },
                {
                    "timestamp": 1713680985000,
                    "value": 23.28
                },
                {
                    "timestamp": 1713680990000,
                    "value": 21.43
                },
                {
                    "timestamp": 1713680995000,
                    "value": 27.1
                },
                {
                    "timestamp": 1713681000000,
                    "value": 27.87
                },
                {
                    "timestamp": 1713681005000,
                    "value": 57.84
                },
                {
                    "timestamp": 1713681010000,
                    "value": 19.86
                },
                {
                    "timestamp": 1713681015000,
                    "value": 43.71
                },
                {
                    "timestamp": 1713681020000,
                    "value": 50.54
                },
                {
                    "timestamp": 1713681025000,
                    "value": 49.79
                },
                {
                    "timestamp": 1713681030000,
                    "value": 32.47
                },
                {
                    "timestamp": 1713681035000,
                    "value": 28.27
                },
                {
                    "timestamp": 1713681040000,
                    "value": 29.83
                },
                {
                    "timestamp": 1713681045000,
                    "value": 47.45
                },
                {
                    "timestamp": 1713681050000,
                    "value": 47.27
                },
                {
                    "timestamp": 1713681055000,
                    "value": 17.89
                },
                {
                    "timestamp": 1713681060000,
                    "value": 59.19
                },
                {
                    "timestamp": 1713681065000,
                    "value": 13.99
                },
                {
                    "timestamp": 1713681070000,
                    "value": 44.24
                },
                {
                    "timestamp": 1713681075000,
                    "value": 46.65
                },
                {
                    "timestamp": 1713681080000,
                    "value": 12.19
                },
                {
                    "timestamp": 1713681085000,
                    "value": 40.82
                },
                {
                    "timestamp": 1713681090000,
                    "value": 56.86
                },
                {
                    "timestamp": 1713681095000,
                    "value": 21.25
                },
                {
                    "timestamp": 1713681100000,
                    "value": 56.66
                }
            ]
        }
    ]
}
};


export const Disk = Template.bind({});
Disk.args = {
  searchParams: {
    get: () => '5',
  },
  setChanges: () => {},
  data: {
    "name": "Disk IOPS",
    "graphLines": [
        {
            "name": "Read",
            "values": [
                {
                    "timestamp": 1713685365000,
                    "value": 22.68
                },
                {
                    "timestamp": 1713685370000,
                    "value": 23.740000000000002
                },
                {
                    "timestamp": 1713685375000,
                    "value": 24.35
                },
                {
                    "timestamp": 1713685380000,
                    "value": 23.53
                },
                {
                    "timestamp": 1713685385000,
                    "value": 23.7
                },
                {
                    "timestamp": 1713685390000,
                    "value": 23.98
                },
                {
                    "timestamp": 1713685395000,
                    "value": 21.46
                },
                {
                    "timestamp": 1713685400000,
                    "value": 24.18
                },
                {
                    "timestamp": 1713685405000,
                    "value": 23.2
                },
                {
                    "timestamp": 1713685410000,
                    "value": 20.69
                },
                {
                    "timestamp": 1713685415000,
                    "value": 21.23
                },
                {
                    "timestamp": 1713685420000,
                    "value": 20.21
                },
                {
                    "timestamp": 1713685425000,
                    "value": 22.59
                },
                {
                    "timestamp": 1713685430000,
                    "value": 22.19
                },
                {
                    "timestamp": 1713685435000,
                    "value": 21.99
                },
                {
                    "timestamp": 1713685440000,
                    "value": 20.28
                },
                {
                    "timestamp": 1713685445000,
                    "value": 23.14
                },
                {
                    "timestamp": 1713685450000,
                    "value": 24.57
                },
                {
                    "timestamp": 1713685455000,
                    "value": 24.14
                },
                {
                    "timestamp": 1713685460000,
                    "value": 24.97
                },
                {
                    "timestamp": 1713685465000,
                    "value": 22.29
                },
                {
                    "timestamp": 1713685470000,
                    "value": 23.1
                },
                {
                    "timestamp": 1713685475000,
                    "value": 23.06
                },
                {
                    "timestamp": 1713685480000,
                    "value": 21.4
                },
                {
                    "timestamp": 1713685485000,
                    "value": 22.45
                },
                {
                    "timestamp": 1713685490000,
                    "value": 20.72
                },
                {
                    "timestamp": 1713685495000,
                    "value": 24.33
                },
                {
                    "timestamp": 1713685500000,
                    "value": 21.07
                },
                {
                    "timestamp": 1713685505000,
                    "value": 24.53
                },
                {
                    "timestamp": 1713685510000,
                    "value": 23.509999999999998
                },
                {
                    "timestamp": 1713685515000,
                    "value": 21.41
                },
                {
                    "timestamp": 1713685520000,
                    "value": 20.49
                },
                {
                    "timestamp": 1713685525000,
                    "value": 21.5
                },
                {
                    "timestamp": 1713685530000,
                    "value": 21.9
                },
                {
                    "timestamp": 1713685535000,
                    "value": 20.34
                },
                {
                    "timestamp": 1713685540000,
                    "value": 20.53
                },
                {
                    "timestamp": 1713685545000,
                    "value": 23.44
                },
                {
                    "timestamp": 1713685550000,
                    "value": 21.91
                },
                {
                    "timestamp": 1713685555000,
                    "value": 23.490000000000002
                },
                {
                    "timestamp": 1713685560000,
                    "value": 21.98
                },
                {
                    "timestamp": 1713685565000,
                    "value": 20.1
                },
                {
                    "timestamp": 1713685570000,
                    "value": 21.17
                },
                {
                    "timestamp": 1713685575000,
                    "value": 23.96
                },
                {
                    "timestamp": 1713685580000,
                    "value": 23.34
                },
                {
                    "timestamp": 1713685585000,
                    "value": 23.47
                },
                {
                    "timestamp": 1713685590000,
                    "value": 22.34
                },
                {
                    "timestamp": 1713685595000,
                    "value": 23.33
                },
                {
                    "timestamp": 1713685600000,
                    "value": 20.05
                },
                {
                    "timestamp": 1713685605000,
                    "value": 22.38
                },
                {
                    "timestamp": 1713685610000,
                    "value": 20.51
                },
                {
                    "timestamp": 1713685615000,
                    "value": 22.15
                },
                {
                    "timestamp": 1713685620000,
                    "value": 23.43
                },
                {
                    "timestamp": 1713685625000,
                    "value": 22.67
                },
                {
                    "timestamp": 1713685630000,
                    "value": 24.29
                },
                {
                    "timestamp": 1713685635000,
                    "value": 22.36
                },
                {
                    "timestamp": 1713685640000,
                    "value": 22.02
                },
                {
                    "timestamp": 1713685645000,
                    "value": 20.04
                },
                {
                    "timestamp": 1713685650000,
                    "value": 24.43
                },
                {
                    "timestamp": 1713685655000,
                    "value": 21.94
                },
                {
                    "timestamp": 1713685660000,
                    "value": 22.14
                },
                {
                    "timestamp": 1713685665000,
                    "value": 23.38
                }
            ]
        },
        {
            "name": "Write",
            "values": [
                {
                    "timestamp": 1713685365000,
                    "value": 3.91
                },
                {
                    "timestamp": 1713685370000,
                    "value": 10.370000000000001
                },
                {
                    "timestamp": 1713685375000,
                    "value": 2.55
                },
                {
                    "timestamp": 1713685380000,
                    "value": 14.37
                },
                {
                    "timestamp": 1713685385000,
                    "value": 11.85
                },
                {
                    "timestamp": 1713685390000,
                    "value": 3.54
                },
                {
                    "timestamp": 1713685395000,
                    "value": 2.79
                },
                {
                    "timestamp": 1713685400000,
                    "value": 8.7
                },
                {
                    "timestamp": 1713685405000,
                    "value": 7.9
                },
                {
                    "timestamp": 1713685410000,
                    "value": 14.05
                },
                {
                    "timestamp": 1713685415000,
                    "value": 10.35
                },
                {
                    "timestamp": 1713685420000,
                    "value": 8.969999999999999
                },
                {
                    "timestamp": 1713685425000,
                    "value": 14.73
                },
                {
                    "timestamp": 1713685430000,
                    "value": 2.63
                },
                {
                    "timestamp": 1713685435000,
                    "value": 9.14
                },
                {
                    "timestamp": 1713685440000,
                    "value": 13.03
                },
                {
                    "timestamp": 1713685445000,
                    "value": 13.33
                },
                {
                    "timestamp": 1713685450000,
                    "value": 6.390000000000001
                },
                {
                    "timestamp": 1713685455000,
                    "value": 7.71
                },
                {
                    "timestamp": 1713685460000,
                    "value": 13
                },
                {
                    "timestamp": 1713685465000,
                    "value": 6.61
                },
                {
                    "timestamp": 1713685470000,
                    "value": 5.23
                },
                {
                    "timestamp": 1713685475000,
                    "value": 14.05
                },
                {
                    "timestamp": 1713685480000,
                    "value": 6.6
                },
                {
                    "timestamp": 1713685485000,
                    "value": 10.72
                },
                {
                    "timestamp": 1713685490000,
                    "value": 5.390000000000001
                },
                {
                    "timestamp": 1713685495000,
                    "value": 12.89
                },
                {
                    "timestamp": 1713685500000,
                    "value": 3.84
                },
                {
                    "timestamp": 1713685505000,
                    "value": 2.75
                },
                {
                    "timestamp": 1713685510000,
                    "value": 3.83
                },
                {
                    "timestamp": 1713685515000,
                    "value": 14.54
                },
                {
                    "timestamp": 1713685520000,
                    "value": 12.37
                },
                {
                    "timestamp": 1713685525000,
                    "value": 2.5
                },
                {
                    "timestamp": 1713685530000,
                    "value": 13.29
                },
                {
                    "timestamp": 1713685535000,
                    "value": 13.06
                },
                {
                    "timestamp": 1713685540000,
                    "value": 8.370000000000001
                },
                {
                    "timestamp": 1713685545000,
                    "value": 6.5
                },
                {
                    "timestamp": 1713685550000,
                    "value": 7.17
                },
                {
                    "timestamp": 1713685555000,
                    "value": 2.79
                },
                {
                    "timestamp": 1713685560000,
                    "value": 11.65
                },
                {
                    "timestamp": 1713685565000,
                    "value": 6.1899999999999995
                },
                {
                    "timestamp": 1713685570000,
                    "value": 14.87
                },
                {
                    "timestamp": 1713685575000,
                    "value": 10.129999999999999
                },
                {
                    "timestamp": 1713685580000,
                    "value": 11.71
                },
                {
                    "timestamp": 1713685585000,
                    "value": 14.02
                },
                {
                    "timestamp": 1713685590000,
                    "value": 9.85
                },
                {
                    "timestamp": 1713685595000,
                    "value": 3.45
                },
                {
                    "timestamp": 1713685600000,
                    "value": 10.67
                },
                {
                    "timestamp": 1713685605000,
                    "value": 9.219999999999999
                },
                {
                    "timestamp": 1713685610000,
                    "value": 10.88
                },
                {
                    "timestamp": 1713685615000,
                    "value": 2.73
                },
                {
                    "timestamp": 1713685620000,
                    "value": 10.35
                },
                {
                    "timestamp": 1713685625000,
                    "value": 10.26
                },
                {
                    "timestamp": 1713685630000,
                    "value": 9.32
                },
                {
                    "timestamp": 1713685635000,
                    "value": 8.82
                },
                {
                    "timestamp": 1713685640000,
                    "value": 4.95
                },
                {
                    "timestamp": 1713685645000,
                    "value": 6.52
                },
                {
                    "timestamp": 1713685650000,
                    "value": 3.5
                },
                {
                    "timestamp": 1713685655000,
                    "value": 13.66
                },
                {
                    "timestamp": 1713685660000,
                    "value": 14.14
                },
                {
                    "timestamp": 1713685665000,
                    "value": 9.940000000000001
                }
            ]
        }
    ]
}
};