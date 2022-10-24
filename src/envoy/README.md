# Envoy Configuration

## Starting envoy as a system daemon

```sh
envoy -c $path_to_the_envoy_yaml_file
```

After starting the envoy proxy, it can be check by trying to access the port we assigned a listener to from a browser, or curling into the port

```sh
curl -v $localhost:port_number
```

## Validating Envoy configuration

Allows to check if the envoy proxy will be able to start without starting it, restarting the service or making any network connections

```sh
envoy --mode validate -c $path_to_envoy_yaml_file
```

## Envoy logging

By default, envoy sends logs to /dev/stderr by default.
To override this behavior, use --log-path

```sh
envoy -c $path_to_yaml_file --log-path $path_to_where_log_will_be_dump
```

**NOTICE** We can configure a listener to dump his access log into a specific folder. See how it is done in the demo yaml file

## Envoy Networking

Envoy uses IPv4 and IPv6 networks by default. Since some environment do not support IPv6, it should be disabled when running envoy in those environment.
Disabling IPv6:

```yaml
34  clusters:
35  - name: service_envoyproxy_io
36    type: LOGICAL_DNS
38    dns_lookup_family: V4_ONLY ## This is the line disabling IPv6 networks
39    load_assignment:
40      cluster_name: service_envoyproxy_io
41      endpoints:
42      - lb_endpoints:
43        - endpoint:
44            address:
45              socket_address:
```

## Debugging Envoy

See https://www.envoyproxy.io/docs/envoy/latest/start/quick-start/run-envoy
