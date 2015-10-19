TRIPLET_DATA = $(wildcard triplet-data/*.json)
HEX_DATA = $(addprefix hex-data/,$(notdir $(TRIPLET_DATA)))

all: $(HEX_DATA)

hex-data:
	mkdir -p hex-data

hex-data/%.json: triplet-data/%.json hex-data
	node build $(abspath $<) > $@
