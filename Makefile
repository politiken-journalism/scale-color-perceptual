RGB_DATA = $(wildcard rgb/*.json)
HEX_DATA = $(addprefix hex/,$(notdir $(RGB_DATA)))

all: $(HEX_DATA)

hex:
	mkdir -p hex

hex/%.json: rgb/%.json hex
	node build $(abspath $<) > $@
