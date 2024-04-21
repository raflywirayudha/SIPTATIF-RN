import React, { useState } from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { Input, Select, SelectItem, Button } from "@ui-kitten/components";

const useSelectState = (initialState = undefined) => {
  const [selectedIndex, setSelectedIndex] = useState(initialState);
  return { selectedIndex, onSelect: setSelectedIndex };
};

const Form = () => {
  const [nama, setNama] = useState("");
  const [nim, setNim] = useState("");
  const [email, setEmail] = useState("");
  const [judul, setJudul] = useState("");

  const jenisPendaftaran = useSelectState();
  const angkatan = useSelectState();
  const kategori = useSelectState();
  const calonDp1 = useSelectState();
  const calonDp2 = useSelectState();

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <Select
          style={styles.select}
          label="Jenis Pendaftaran"
          placeholder="Pilih Jenis Pendaftaran"
          {...jenisPendaftaran}
        >
          <SelectItem title="Option 1" />
          <SelectItem title="Option 2" />
          <SelectItem title="Option 3" />
        </Select>

        <Input
          style={styles.input}
          value={nama}
          label="Nama Mahasiswa"
          onChangeText={(nextValue) => setNama(nextValue)}
        />

        <View style={styles.inlineInput}>
          <Input
            style={[styles.input, { flex: 1.2 }]}
            value={nim}
            inputMode="numeric"
            label="Nomor Induk Mahasiswa"
            onChangeText={(nextValue) => setNim(nextValue)}
          />
          <Select
            style={[styles.input, { marginLeft: 10, flex: 1 }]}
            label="Angkatan"
            placeholder="Pilih Angkatan"
            {...angkatan}
          >
            <SelectItem title="Option 1" />
            <SelectItem title="Option 2" />
            <SelectItem title="Option 3" />
          </Select>
        </View>

        <Input
          style={styles.input}
          value={email}
          label="Email Mahasiswa"
          onChangeText={(nextValue) => setEmail(nextValue)}
        />

        <Input
          style={styles.input}
          value={judul}
          label="Judul Tugas Akhir"
          onChangeText={(nextValue) => setJudul(nextValue)}
        />

        <Select
          style={styles.select}
          label="Kategori"
          placeholder="Pilih Kategori"
          {...kategori}
        >
          <SelectItem title="Option 1" />
          <SelectItem title="Option 2" />
          <SelectItem title="Option 3" />
        </Select>

        <Select
          style={styles.select}
          label="Calon Dosen Pembimbing 1"
          placeholder="Pilih Dosen"
          {...calonDp1}
        >
          <SelectItem title="Option 1" />
          <SelectItem title="Option 2" />
          <SelectItem title="Option 3" />
        </Select>

        <Select
          style={styles.select}
          label="Calon Dosen Pembimbing 2"
          placeholder="Pilih Dosen"
          {...calonDp2}
        >
          <SelectItem title="Option 1" />
          <SelectItem title="Option 2" />
          <SelectItem title="Option 3" />
        </Select>
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            paddingLeft: 215,
          }}
        >
          <Button style={styles.button} status="basic">
            Batal
          </Button>
          <Button style={styles.button}>Kirim</Button>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    margin: 10,
    borderRadius: 10,
    backgroundColor: "#ffffff",
  },
  select: {
    width: "100%",
    paddingBottom: 15,
  },
  input: {
    width: "100%",
    paddingBottom: 15,
  },
  inlineInput: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  button: {
    marginVertical: 10,
    marginLeft: 10,
  },
});

export default Form;
