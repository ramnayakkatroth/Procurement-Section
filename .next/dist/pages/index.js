'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _factory = require('../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/ramnayak/Pictures/HOD/kickstarter/pages/index.js?entry';


var CampaignIndex = function (_Component) {
  (0, _inherits3.default)(CampaignIndex, _Component);

  function CampaignIndex() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, CampaignIndex);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CampaignIndex.__proto__ || (0, _getPrototypeOf2.default)(CampaignIndex)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      msg: '',
      account: ''
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var out;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                //console.log(this.state.msg);
                _context.next = 3;
                return _factory2.default.methods.makeRequest(_this.state.msg).send({ from: _this.state.account });

              case 3:
                out = _context.sent;

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(CampaignIndex, [{
    key: 'componentDidMount',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee15() {
        var accounts, acc, d, d1, p, v, ar, ao, len, t, i, req, row, cell1, cell2, cell3, cell4, cell5, t1, t2, _req, ip, sendCheck, cell6, no, yes, v1, v2, _req2, ac, rc, AR, AO, cell7, AOorange, ARorange, AOaccept, ARaccept, vcAccept, vcReject, _req3, _req4;

        return _regenerator2.default.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                _context15.next = 2;
                return _web2.default.eth.getAccounts();

              case 2:
                accounts = _context15.sent;

                this.setState({ account: accounts[0] });
                acc = accounts[0];
                //HOD

                if (acc == '0x53E7291Ba66D9f79bc75bcce3F3889Cb0fc0d54A') {
                  d = document.getElementById('hod');
                  d1 = document.getElementById('hod1');
                  p = document.getElementById('pro');
                  v = document.getElementById('vc');
                  ar = document.getElementById('ar');
                  ao = document.getElementById('ao');

                  p.style.display = "none";
                  d.style.display = "block";
                  d1.style.display = "block";
                  v.style.display = "none";

                  ar.style.display = "none";
                  ao.style.display = "none";

                  //Pro
                } else if (acc == '0xB49B4C8edc861A706d6D0747147FFaA8fCE6377E') {
                  d = document.getElementById('hod');
                  d1 = document.getElementById('hod1');
                  p = document.getElementById('pro');
                  v = document.getElementById('vc');
                  ar = document.getElementById('ar');
                  ao = document.getElementById('ao');

                  p.style.display = "block";
                  d.style.display = "none";
                  d1.style.display = "none";
                  v.style.display = "none";

                  ar.style.display = "none";
                  ao.style.display = "none";
                  //vc
                } else if (acc == '0x5C79F282b93cBb95283245b68912561F9891b83B') {
                  d = document.getElementById('hod');
                  d1 = document.getElementById('hod1');
                  p = document.getElementById('pro');
                  v = document.getElementById('vc');
                  ar = document.getElementById('ar');
                  ao = document.getElementById('ao');

                  p.style.display = "none";
                  d.style.display = "none";
                  d1.style.display = "none";
                  v.style.display = "block";

                  ar.style.display = "none";
                  ao.style.display = "none";
                } else if (acc == '0xA24D9a4c74e2FFE2D3fFD54D4A3e1003293918bc') {
                  d = document.getElementById('hod');
                  d1 = document.getElementById('hod1');
                  p = document.getElementById('pro');
                  v = document.getElementById('vc');
                  ar = document.getElementById('ar');
                  ao = document.getElementById('ao');

                  p.style.display = "none";
                  d.style.display = "none";
                  d1.style.display = "none";
                  v.style.display = "none";
                  ar.style.display = "block";
                  ao.style.display = "none";
                } else if (acc == '0xCcacb9945f22E5B0b0C32a586BFAc2538B2f026B') {
                  d = document.getElementById('hod');
                  d1 = document.getElementById('hod1');
                  p = document.getElementById('pro');
                  v = document.getElementById('vc');
                  ar = document.getElementById('ar');
                  ao = document.getElementById('ao');

                  p.style.display = "none";
                  d.style.display = "none";
                  d1.style.display = "none";
                  v.style.display = "none";
                  ar.style.display = "none";
                  ao.style.display = "block";
                }

                //Hod table display
                _context15.next = 8;
                return _factory2.default.methods.requests_length().call();

              case 8:
                len = _context15.sent;
                t = document.getElementById('hodtable');
                i = 0;

              case 11:
                if (!(i < len)) {
                  _context15.next = 28;
                  break;
                }

                _context15.next = 14;
                return _factory2.default.methods.requests(i).call();

              case 14:
                req = _context15.sent;

                // const req1=await factory.methods.vcRequests(i).call();
                row = t.insertRow(1);
                cell1 = row.insertCell(0);
                cell2 = row.insertCell(1);
                cell3 = row.insertCell(2);
                cell4 = row.insertCell(3);
                cell5 = row.insertCell(4);

                cell1.innerHTML = i + 1;
                cell2.innerHTML = req.description;
                cell3.innerHTML = req.status;
                //cell4.innerHTML = ""+req.complete;
                if (req.status == "Rejected at PS" || req.complete == true) {
                  cell4.innerHTML = "<button class='ui green button'><i class='check icon'></i>Yes</button>";
                } else {
                  cell4.innerHTML = "<button class='ui red button'><i class='close icon'></i>No</button>";
                }

                i += 1;

                _context15.next = 11;
                break;

              case 28:
                //end of hod table

                //protable
                t = document.getElementById('protable');
                t1 = document.getElementById('protable1');
                t2 = document.getElementById('protable2');
                //console.log(t);

                i = 0;

              case 32:
                if (!(i < len)) {
                  _context15.next = 41;
                  break;
                }

                _context15.next = 35;
                return _factory2.default.methods.requests(i).call();

              case 35:
                _req = _context15.sent;

                if (_req.vcAccept == true && _req.check != true) {
                  row = t2.insertRow(1);
                  cell1 = row.insertCell(0);
                  cell2 = row.insertCell(1);
                  cell3 = row.insertCell(2);
                  cell4 = row.insertCell(3);
                  cell5 = row.insertCell(4);

                  cell1.innerHTML = i + 1;
                  cell2.innerHTML = _req.description;
                  cell3.innerHTML = _req.sender;
                  ip = document.createElement("input");

                  ip.setAttribute("class", "ui input");
                  ip.setAttribute("type", "number");
                  // ip.setAttribute("value","0");
                  ip.setAttribute("id", "ip");
                  ip.setAttribute("placeholder", "Enter Expected Amount");
                  cell4.appendChild(ip);
                  sendCheck = document.createElement("button");

                  sendCheck.setAttribute("class", "ui blue button");
                  sendCheck.setAttribute("id", i + 1);
                  sendCheck.innerHTML = "Send Bill Amt";
                  cell5.appendChild(sendCheck);
                  sendCheck.onclick = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
                    var val, val1, id, accounts, out;
                    return _regenerator2.default.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            val = document.getElementById("ip").value;
                            val1 = parseInt(val);
                            //console.log(val1);

                            id = parseInt(this.id);
                            _context2.next = 5;
                            return _web2.default.eth.getAccounts();

                          case 5:
                            accounts = _context2.sent;
                            _context2.next = 8;
                            return _factory2.default.methods.sendCheck(id - 1, val1).send({ from: accounts[0] });

                          case 8:
                            out = _context2.sent;

                          case 9:
                          case 'end':
                            return _context2.stop();
                        }
                      }
                    }, _callee2, this);
                  }));
                }
                if (_req.vc != true && _req.status != "Rejected by PS" && _req.complete != true) {
                  row = t.insertRow(1);
                  cell1 = row.insertCell(0);
                  cell2 = row.insertCell(1);
                  cell3 = row.insertCell(2);
                  cell4 = row.insertCell(3);
                  cell5 = row.insertCell(4);
                  cell6 = row.insertCell(5);

                  cell1.innerHTML = i + 1;
                  cell2.innerHTML = _req.description;
                  cell3.innerHTML = _req.sender;
                  cell4.innerHTML = "" + _req.status;
                  no = document.createElement("button");

                  no.setAttribute("class", "ui negative button");
                  no.innerHTML = "Reject";
                  no.setAttribute("id", i + 1);
                  no.onclick = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
                    var accounts, id;
                    return _regenerator2.default.wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            _context3.next = 2;
                            return _web2.default.eth.getAccounts();

                          case 2:
                            accounts = _context3.sent;
                            id = parseInt(this.id);

                            console.log(id);
                            //console.log(typeof(id));

                            _context3.next = 7;
                            return _factory2.default.methods.rejectPS(id - 1).send({ from: accounts[0] });

                          case 7:
                          case 'end':
                            return _context3.stop();
                        }
                      }
                    }, _callee3, this);
                  }));

                  yes = document.createElement("button");

                  yes.setAttribute("class", "ui positive button");
                  yes.innerHTML = "Accept";
                  yes.setAttribute("id", i + 1);
                  yes.onclick = function () {
                    var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(i) {
                      var accounts, id;
                      return _regenerator2.default.wrap(function _callee4$(_context4) {
                        while (1) {
                          switch (_context4.prev = _context4.next) {
                            case 0:
                              _context4.next = 2;
                              return _web2.default.eth.getAccounts();

                            case 2:
                              accounts = _context4.sent;
                              id = parseInt(this.id);

                              console.log(id);
                              _context4.next = 7;
                              return _factory2.default.methods.acceptPS(id - 1).send({ from: accounts[0] });

                            case 7:
                            case 'end':
                              return _context4.stop();
                          }
                        }
                      }, _callee4, this);
                    }));

                    return function (_x2) {
                      return _ref6.apply(this, arguments);
                    };
                  }();
                  cell5.appendChild(no);
                  cell6.appendChild(yes);
                } else {
                  row = t1.insertRow(1);
                  cell1 = row.insertCell(0);
                  cell2 = row.insertCell(1);
                  cell3 = row.insertCell(2);
                  cell4 = row.insertCell(3);
                  cell5 = row.insertCell(4);

                  cell1.innerHTML = i + 1;
                  cell2.innerHTML = _req.description;
                  cell3.innerHTML = _req.sender;
                  cell4.innerHTML = "" + _req.status;
                }
                i += 1;
                _context15.next = 32;
                break;

              case 41:
                //end of procure table


                //vc table
                //var len=await factory.methods.vcRequests_length().call();
                i = 0;
                v = document.getElementById('vctable');
                v1 = document.getElementById('vctable1');
                v2 = document.getElementById('vctable2');

              case 45:
                if (!(i < len)) {
                  _context15.next = 54;
                  break;
                }

                _context15.next = 48;
                return _factory2.default.methods.requests(i).call();

              case 48:
                _req2 = _context15.sent;

                //console.log(req.message);
                if (_req2.check == true && _req2.complete != true) {
                  row = v2.insertRow(1);
                  cell1 = row.insertCell(0);
                  cell2 = row.insertCell(1);
                  cell3 = row.insertCell(2);
                  cell4 = row.insertCell(3);
                  cell5 = row.insertCell(4);

                  cell1.innerHTML = i + 1;
                  cell2.innerHTML = _req2.description;
                  cell3.innerHTML = _req2.sender;
                  cell4.innerHTML = _req2.bill;

                  ac = document.createElement("button");

                  ac.setAttribute("class", "ui green button");
                  ac.setAttribute("id", i + 1);
                  ac.innerHTML = "Accept";
                  cell5.appendChild(ac);

                  rc = document.createElement("button");

                  rc.setAttribute("class", "ui red button");
                  rc.setAttribute("id", i + 1);
                  rc.innerHTML = "Reject";
                  cell5.appendChild(rc);

                  ac.onclick = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {
                    var id, accounts, out;
                    return _regenerator2.default.wrap(function _callee5$(_context5) {
                      while (1) {
                        switch (_context5.prev = _context5.next) {
                          case 0:
                            id = parseInt(this.id);
                            _context5.next = 3;
                            return _web2.default.eth.getAccounts();

                          case 3:
                            accounts = _context5.sent;
                            _context5.next = 6;
                            return _factory2.default.methods.acceptCheck(id - 1).send({ from: accounts[0] });

                          case 6:
                            out = _context5.sent;

                          case 7:
                          case 'end':
                            return _context5.stop();
                        }
                      }
                    }, _callee5, this);
                  }));
                  rc.onclick = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6() {
                    var id, accounts, out;
                    return _regenerator2.default.wrap(function _callee6$(_context6) {
                      while (1) {
                        switch (_context6.prev = _context6.next) {
                          case 0:
                            id = parseInt(this.id);
                            _context6.next = 3;
                            return _web2.default.eth.getAccounts();

                          case 3:
                            accounts = _context6.sent;
                            _context6.next = 6;
                            return _factory2.default.methods.rejectCheck(id - 1).send({ from: accounts[0] });

                          case 6:
                            out = _context6.sent;

                          case 7:
                          case 'end':
                            return _context6.stop();
                        }
                      }
                    }, _callee6, this);
                  }));
                }
                if (_req2.vc == true && _req2.ao != true && _req2.ar != true) {
                  row = v.insertRow(1);
                  cell1 = row.insertCell(0);
                  cell2 = row.insertCell(1);
                  cell3 = row.insertCell(2);
                  cell4 = row.insertCell(3);
                  cell5 = row.insertCell(4);

                  cell1.innerHTML = i + 1;
                  cell2.innerHTML = _req2.description;
                  cell3.innerHTML = _req2.sender;
                  AR = document.createElement("button");

                  AR.setAttribute("class", "ui blue button");
                  AR.innerHTML = "Send to Verifiers";
                  AR.setAttribute("id", i + 1);
                  AR.onclick = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7() {
                    var accounts, id;
                    return _regenerator2.default.wrap(function _callee7$(_context7) {
                      while (1) {
                        switch (_context7.prev = _context7.next) {
                          case 0:
                            _context7.next = 2;
                            return _web2.default.eth.getAccounts();

                          case 2:
                            accounts = _context7.sent;
                            id = parseInt(this.id);
                            //console.log(accounts);

                            console.log(id);
                            console.log((0, _typeof3.default)(accounts[0]));

                            _context7.next = 8;
                            return _factory2.default.methods.showAR(id - 1).send({ from: accounts[0] });

                          case 8:
                            _context7.next = 10;
                            return _factory2.default.methods.showAO(id - 1).send({ from: accounts[0] });

                          case 10:
                          case 'end':
                            return _context7.stop();
                        }
                      }
                    }, _callee7, this);
                  }));

                  AO = document.createElement("button");

                  AO.setAttribute("class", "ui blue button");
                  AO.innerHTML = "AO";
                  AO.setAttribute("id", i + 1);
                  AO.onclick = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8() {
                    var accounts, id;
                    return _regenerator2.default.wrap(function _callee8$(_context8) {
                      while (1) {
                        switch (_context8.prev = _context8.next) {
                          case 0:
                            _context8.next = 2;
                            return _web2.default.eth.getAccounts();

                          case 2:
                            accounts = _context8.sent;
                            id = parseInt(this.id);

                            console.log(id);

                          case 5:
                          case 'end':
                            return _context8.stop();
                        }
                      }
                    }, _callee8, this);
                  }));
                  cell4.appendChild(AR);
                  //cell5.appendChild(AO);
                } else if (_req2.vcAccept != true && _req2.complete != true && _req2.status != "Request at PS") {
                  //console.log("im")
                  //console.log(req.aoAccept);
                  //console.log(req.arAccept);
                  //console.log(req.vcAccept);
                  //console.log(req.status);
                  row = v1.insertRow(1);
                  cell1 = row.insertCell(0);
                  cell2 = row.insertCell(1);
                  cell3 = row.insertCell(2);
                  cell4 = row.insertCell(3);
                  cell5 = row.insertCell(4);
                  cell6 = row.insertCell(5);
                  cell7 = row.insertCell(6);

                  cell1.innerHTML = i + 1;
                  cell2.innerHTML = _req2.description;
                  cell3.innerHTML = _req2.sender;
                  //cell4.innerHTML = ""+req.status;
                  AO = document.createElement("button");

                  AO.setAttribute("class", "ui blue button");
                  AO.innerHTML = "AO";
                  AO.setAttribute("id", i + 1);
                  AO.onclick = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee9() {
                    var accounts, id;
                    return _regenerator2.default.wrap(function _callee9$(_context9) {
                      while (1) {
                        switch (_context9.prev = _context9.next) {
                          case 0:
                            _context9.next = 2;
                            return _web2.default.eth.getAccounts();

                          case 2:
                            accounts = _context9.sent;
                            id = parseInt(this.id);

                            console.log(id);
                            _context9.next = 7;
                            return _factory2.default.methods.showAO(id - 1).send({ from: accounts[0] });

                          case 7:
                          case 'end':
                            return _context9.stop();
                        }
                      }
                    }, _callee9, this);
                  }));
                  AR = document.createElement("button");

                  AR.setAttribute("class", "ui blue button");
                  AR.innerHTML = "AR";
                  AR.setAttribute("id", i + 1);
                  AR.onclick = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee10() {
                    var accounts, id;
                    return _regenerator2.default.wrap(function _callee10$(_context10) {
                      while (1) {
                        switch (_context10.prev = _context10.next) {
                          case 0:
                            _context10.next = 2;
                            return _web2.default.eth.getAccounts();

                          case 2:
                            accounts = _context10.sent;
                            id = parseInt(this.id);
                            //console.log(accounts);

                            console.log(id);
                            console.log((0, _typeof3.default)(accounts[0]));

                            _context10.next = 8;
                            return _factory2.default.methods.showAR(id - 1).send({ from: accounts[0] });

                          case 8:
                          case 'end':
                            return _context10.stop();
                        }
                      }
                    }, _callee10, this);
                  }));
                  AOorange = document.createElement("button");

                  AOorange.setAttribute("class", "ui inverted orange button");
                  AOorange.innerHTML = "Sent To AO";

                  ARorange = document.createElement("button");

                  ARorange.setAttribute("class", "ui inverted orange button");
                  ARorange.innerHTML = "Sent To AR";

                  AOaccept = document.createElement("button");

                  AOaccept.setAttribute("class", "ui inverted green button");
                  AOaccept.innerHTML = "AO Accepted";

                  ARaccept = document.createElement("button");

                  ARaccept.setAttribute("class", "ui inverted green button");
                  ARaccept.innerHTML = "AR Accepted";

                  if (_req2.arAccept == true) {
                    cell4.appendChild(ARaccept);
                  } else {
                    cell4.appendChild(ARorange);
                  }
                  if (_req2.aoAccept == true) {
                    cell5.appendChild(AOaccept);
                  } else {
                    cell5.appendChild(AOorange);
                  }

                  vcAccept = document.createElement("button");

                  vcAccept.setAttribute("class", "ui green button");
                  vcAccept.innerHTML = "Accept";
                  vcAccept.setAttribute("id", i + 1);
                  vcAccept.onclick = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee11() {
                    var accounts, id;
                    return _regenerator2.default.wrap(function _callee11$(_context11) {
                      while (1) {
                        switch (_context11.prev = _context11.next) {
                          case 0:
                            _context11.next = 2;
                            return _web2.default.eth.getAccounts();

                          case 2:
                            accounts = _context11.sent;
                            id = parseInt(this.id);

                            console.log(id);
                            _context11.next = 7;
                            return _factory2.default.methods.acceptVC(id - 1).send({ from: accounts[0] });

                          case 7:
                          case 'end':
                            return _context11.stop();
                        }
                      }
                    }, _callee11, this);
                  }));

                  vcReject = document.createElement("button");

                  vcReject.setAttribute("class", "ui red button");
                  vcReject.innerHTML = "Reject";
                  vcReject.setAttribute("id", i + 1);
                  vcReject.onclick = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee12() {
                    var accounts, id;
                    return _regenerator2.default.wrap(function _callee12$(_context12) {
                      while (1) {
                        switch (_context12.prev = _context12.next) {
                          case 0:
                            _context12.next = 2;
                            return _web2.default.eth.getAccounts();

                          case 2:
                            accounts = _context12.sent;
                            id = parseInt(this.id);

                            console.log(id);
                            _context12.next = 7;
                            return _factory2.default.methods.rejectVC(id - 1).send({ from: accounts[0] });

                          case 7:
                          case 'end':
                            return _context12.stop();
                        }
                      }
                    }, _callee12, this);
                  }));

                  cell6.appendChild(vcAccept);
                  cell7.appendChild(vcReject);
                }

                i += 1;

                _context15.next = 45;
                break;

              case 54:

                //end of vc table


                //aotable
                t = document.getElementById('aotable');
                //var t1=document.getElementById('protable1');
                //console.log(t);

                i = 0;

              case 56:
                if (!(i < len)) {
                  _context15.next = 64;
                  break;
                }

                _context15.next = 59;
                return _factory2.default.methods.requests(i).call();

              case 59:
                _req3 = _context15.sent;

                if (_req3.ao == true && _req3.aoAccept != true) {
                  row = t.insertRow(1);
                  cell1 = row.insertCell(0);
                  cell2 = row.insertCell(1);
                  cell3 = row.insertCell(2);
                  cell4 = row.insertCell(3);
                  yes = document.createElement("button");

                  yes.setAttribute("class", "ui positive button");
                  yes.innerHTML = "Accept";
                  yes.setAttribute("id", i + 1);
                  yes.onclick = function () {
                    var _ref15 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee13(i) {
                      var accounts, id;
                      return _regenerator2.default.wrap(function _callee13$(_context13) {
                        while (1) {
                          switch (_context13.prev = _context13.next) {
                            case 0:
                              _context13.next = 2;
                              return _web2.default.eth.getAccounts();

                            case 2:
                              accounts = _context13.sent;
                              id = parseInt(this.id);

                              console.log(id);
                              _context13.next = 7;
                              return _factory2.default.methods.acceptAO(id - 1).send({ from: accounts[0] });

                            case 7:
                            case 'end':
                              return _context13.stop();
                          }
                        }
                      }, _callee13, this);
                    }));

                    return function (_x3) {
                      return _ref15.apply(this, arguments);
                    };
                  }();
                  cell1.innerHTML = i + 1;
                  cell2.innerHTML = _req3.description;
                  cell3.innerHTML = _req3.sender;
                  cell4.appendChild(yes);
                  //cell5.appendChild(no);
                }
                i += 1;
                _context15.next = 56;
                break;

              case 64:
                //ao table

                //artable
                t = document.getElementById('artable');
                //var t1=document.getElementById('protable1');
                //console.log(t);

                i = 0;

              case 66:
                if (!(i < len)) {
                  _context15.next = 74;
                  break;
                }

                _context15.next = 69;
                return _factory2.default.methods.requests(i).call();

              case 69:
                _req4 = _context15.sent;

                //sconsole.log(req.arAccept);
                if (_req4.ar == true & _req4.arAccept != true) {
                  row = t.insertRow(1);
                  cell1 = row.insertCell(0);
                  cell2 = row.insertCell(1);
                  cell3 = row.insertCell(2);
                  cell4 = row.insertCell(3);
                  yes = document.createElement("button");

                  yes.setAttribute("class", "ui positive button");
                  yes.innerHTML = "Accept";
                  yes.setAttribute("id", i + 1);
                  yes.onclick = function () {
                    var _ref16 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee14(i) {
                      var accounts, id;
                      return _regenerator2.default.wrap(function _callee14$(_context14) {
                        while (1) {
                          switch (_context14.prev = _context14.next) {
                            case 0:
                              _context14.next = 2;
                              return _web2.default.eth.getAccounts();

                            case 2:
                              accounts = _context14.sent;
                              id = parseInt(this.id);

                              console.log(id);
                              _context14.next = 7;
                              return _factory2.default.methods.acceptAR(id - 1).send({ from: accounts[0] });

                            case 7:
                            case 'end':
                              return _context14.stop();
                          }
                        }
                      }, _callee14, this);
                    }));

                    return function (_x4) {
                      return _ref16.apply(this, arguments);
                    };
                  }();
                  cell1.innerHTML = i + 1;
                  cell2.innerHTML = _req4.description;
                  cell3.innerHTML = _req4.sender;
                  cell4.appendChild(yes);
                  //cell5.appendChild(no);
                }
                i += 1;
                _context15.next = 66;
                break;

              case 74:
              case 'end':
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));

      function componentDidMount() {
        return _ref3.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement('div', { id: 'root', __source: {
          fileName: _jsxFileName,
          lineNumber: 498
        }
      }, _react2.default.createElement('link', { rel: 'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 499
        }
      }), _react2.default.createElement('div', { className: 'ui two column center aligned stackable grid raised segment container', id: 'hod', style: { display: 'none' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 500
        }
      }, _react2.default.createElement('div', { className: 'column', __source: {
          fileName: _jsxFileName,
          lineNumber: 501
        }
      }, _react2.default.createElement('div', { className: 'ui blue raised segment header', __source: {
          fileName: _jsxFileName,
          lineNumber: 502
        }
      }, 'New Request'), _react2.default.createElement('form', { className: 'ui form', onSubmit: this.onSubmit, __source: {
          fileName: _jsxFileName,
          lineNumber: 503
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 504
        }
      }, 'Short Description'), _react2.default.createElement('input', { type: 'text', value: this.state.msg, onChange: function onChange(event) {
          return _this3.setState({ msg: event.target.value });
        }, placeholder: 'Short Description About Request', required: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 505
        }
      }), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 505
        }
      }), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 505
        }
      }), _react2.default.createElement('button', { className: 'ui blue button', __source: {
          fileName: _jsxFileName,
          lineNumber: 506
        }
      }, 'Create Request')))), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 510
        }
      }, _react2.default.createElement('div', { className: 'ui raised segment container', id: 'hod1', style: { display: 'none' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 511
        }
      }, _react2.default.createElement('div', { className: 'ui center aligned blue header', __source: {
          fileName: _jsxFileName,
          lineNumber: 512
        }
      }, 'Recent Requests'), _react2.default.createElement('table', { className: 'ui table', id: 'hodtable', __source: {
          fileName: _jsxFileName,
          lineNumber: 513
        }
      }, _react2.default.createElement('tbody', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 514
        }
      }, _react2.default.createElement('tr', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 515
        }
      }, _react2.default.createElement('th', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 516
        }
      }, 'R.No'), _react2.default.createElement('th', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 517
        }
      }, 'Request Message'), _react2.default.createElement('th', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 518
        }
      }, 'Status'), _react2.default.createElement('th', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 519
        }
      }, 'Complete')))))), _react2.default.createElement('div', { id: 'pro', style: { display: 'none' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 528
        }
      }, _react2.default.createElement('div', { className: 'ui blue inverted raised center aligned segment header', __source: {
          fileName: _jsxFileName,
          lineNumber: 529
        }
      }, 'Procurement Section'), _react2.default.createElement('div', { className: 'ui raised segment container', __source: {
          fileName: _jsxFileName,
          lineNumber: 530
        }
      }, _react2.default.createElement('div', { className: 'ui center aligned blue header', __source: {
          fileName: _jsxFileName,
          lineNumber: 531
        }
      }, 'Recent Requests'), _react2.default.createElement('table', { className: 'ui table', id: 'protable', __source: {
          fileName: _jsxFileName,
          lineNumber: 532
        }
      }, _react2.default.createElement('tbody', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 533
        }
      }, _react2.default.createElement('tr', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 534
        }
      }, _react2.default.createElement('th', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 535
        }
      }, 'R.No'), _react2.default.createElement('th', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 536
        }
      }, 'Request Message'), _react2.default.createElement('th', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 537
        }
      }, 'Sender'), _react2.default.createElement('th', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 538
        }
      }, 'Status'), _react2.default.createElement('th', { align: 'right', __source: {
          fileName: _jsxFileName,
          lineNumber: 539
        }
      }, 'Forward To VC')))), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 544
        }
      }), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 545
        }
      }), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 546
        }
      }), _react2.default.createElement('div', { className: 'ui center aligned blue header', __source: {
          fileName: _jsxFileName,
          lineNumber: 548
        }
      }, 'Check Requests'), _react2.default.createElement('table', { className: 'ui table', id: 'protable2', __source: {
          fileName: _jsxFileName,
          lineNumber: 549
        }
      }, _react2.default.createElement('tbody', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 550
        }
      }, _react2.default.createElement('tr', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 551
        }
      }, _react2.default.createElement('th', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 552
        }
      }, 'R.No'), _react2.default.createElement('th', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 553
        }
      }, 'Request Message'), _react2.default.createElement('th', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 554
        }
      }, 'Sender'), _react2.default.createElement('th', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 555
        }
      }, 'Amount'), _react2.default.createElement('th', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 556
        }
      }, '\xA0')))), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 560
        }
      }), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 561
        }
      }), _react2.default.createElement('div', { className: 'ui center aligned blue header', __source: {
          fileName: _jsxFileName,
          lineNumber: 563
        }
      }, 'Completed Requests'), _react2.default.createElement('table', { className: 'ui table', id: 'protable1', __source: {
          fileName: _jsxFileName,
          lineNumber: 564
        }
      }, _react2.default.createElement('tbody', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 565
        }
      }, _react2.default.createElement('tr', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 566
        }
      }, _react2.default.createElement('th', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 567
        }
      }, 'R.No'), _react2.default.createElement('th', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 568
        }
      }, 'Request Message'), _react2.default.createElement('th', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 569
        }
      }, 'Sender'), _react2.default.createElement('th', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 570
        }
      }, 'Status')))))), _react2.default.createElement('div', { id: 'vc', style: { display: 'none' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 578
        }
      }, _react2.default.createElement('div', { className: 'ui blue inverted raised center aligned segment header', __source: {
          fileName: _jsxFileName,
          lineNumber: 579
        }
      }, 'VC Section'), _react2.default.createElement('div', { className: 'ui raised segment container', __source: {
          fileName: _jsxFileName,
          lineNumber: 580
        }
      }, _react2.default.createElement('div', { className: 'ui center aligned blue header', __source: {
          fileName: _jsxFileName,
          lineNumber: 581
        }
      }, 'Recent Requests'), _react2.default.createElement('table', { className: 'ui table', id: 'vctable', __source: {
          fileName: _jsxFileName,
          lineNumber: 582
        }
      }, _react2.default.createElement('tbody', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 583
        }
      }, _react2.default.createElement('tr', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 584
        }
      }, _react2.default.createElement('th', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 585
        }
      }, 'R.No'), _react2.default.createElement('th', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 586
        }
      }, 'Request Message'), _react2.default.createElement('th', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 587
        }
      }, 'Sender'), _react2.default.createElement('th', { align: 'right', __source: {
          fileName: _jsxFileName,
          lineNumber: 588
        }
      }, 'Forward To')))), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 593
        }
      }), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 594
        }
      }), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 595
        }
      }), _react2.default.createElement('div', { className: 'ui center aligned blue header', __source: {
          fileName: _jsxFileName,
          lineNumber: 597
        }
      }, 'Verification Requests'), _react2.default.createElement('table', { className: 'ui table', id: 'vctable1', __source: {
          fileName: _jsxFileName,
          lineNumber: 598
        }
      }, _react2.default.createElement('tbody', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 599
        }
      }, _react2.default.createElement('tr', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 600
        }
      }, _react2.default.createElement('th', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 601
        }
      }, 'R.No'), _react2.default.createElement('th', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 602
        }
      }, 'Request Message'), _react2.default.createElement('th', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 603
        }
      }, 'Sender'), _react2.default.createElement('th', { align: 'center', __source: {
          fileName: _jsxFileName,
          lineNumber: 605
        }
      }, 'AR Status'), _react2.default.createElement('th', { align: 'center', __source: {
          fileName: _jsxFileName,
          lineNumber: 606
        }
      }, 'AO Status'), _react2.default.createElement('th', { align: 'right', __source: {
          fileName: _jsxFileName,
          lineNumber: 607
        }
      }, 'Accept/Reject')))), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 612
        }
      }), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 613
        }
      }), _react2.default.createElement('div', { className: 'ui center aligned blue header', __source: {
          fileName: _jsxFileName,
          lineNumber: 615
        }
      }, 'Check Requests'), _react2.default.createElement('table', { className: 'ui table', id: 'vctable2', __source: {
          fileName: _jsxFileName,
          lineNumber: 616
        }
      }, _react2.default.createElement('tbody', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 617
        }
      }, _react2.default.createElement('tr', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 618
        }
      }, _react2.default.createElement('th', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 619
        }
      }, 'R.No'), _react2.default.createElement('th', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 620
        }
      }, 'Request Message'), _react2.default.createElement('th', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 621
        }
      }, 'Sender'), _react2.default.createElement('th', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 622
        }
      }, 'Amount (Rs.)'), _react2.default.createElement('th', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 623
        }
      }, 'Accept/Reject')))))), _react2.default.createElement('div', { id: 'ar', style: { display: 'none' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 632
        }
      }, _react2.default.createElement('div', { className: 'ui blue inverted raised center aligned segment header', __source: {
          fileName: _jsxFileName,
          lineNumber: 633
        }
      }, 'AR Section'), _react2.default.createElement('div', { className: 'ui raised segment container', __source: {
          fileName: _jsxFileName,
          lineNumber: 634
        }
      }, _react2.default.createElement('div', { className: 'ui center aligned blue header', __source: {
          fileName: _jsxFileName,
          lineNumber: 635
        }
      }, 'Recent Requests'), _react2.default.createElement('table', { className: 'ui table', id: 'artable', __source: {
          fileName: _jsxFileName,
          lineNumber: 636
        }
      }, _react2.default.createElement('tbody', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 637
        }
      }, _react2.default.createElement('tr', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 638
        }
      }, _react2.default.createElement('th', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 639
        }
      }, 'R.No'), _react2.default.createElement('th', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 640
        }
      }, 'Request Message'), _react2.default.createElement('th', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 641
        }
      }, 'Sender'), _react2.default.createElement('th', { align: 'right', __source: {
          fileName: _jsxFileName,
          lineNumber: 642
        }
      }, 'Accept/Reject')))))), _react2.default.createElement('div', { id: 'ao', style: { display: 'none' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 652
        }
      }, _react2.default.createElement('div', { className: 'ui blue inverted raised center aligned segment header', __source: {
          fileName: _jsxFileName,
          lineNumber: 653
        }
      }, 'AO Section'), _react2.default.createElement('div', { className: 'ui raised segment container', __source: {
          fileName: _jsxFileName,
          lineNumber: 654
        }
      }, _react2.default.createElement('div', { className: 'ui center aligned blue header', __source: {
          fileName: _jsxFileName,
          lineNumber: 655
        }
      }, 'Recent Requests'), _react2.default.createElement('table', { className: 'ui table', id: 'aotable', __source: {
          fileName: _jsxFileName,
          lineNumber: 656
        }
      }, _react2.default.createElement('tbody', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 657
        }
      }, _react2.default.createElement('tr', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 658
        }
      }, _react2.default.createElement('th', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 659
        }
      }, 'R.No'), _react2.default.createElement('th', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 660
        }
      }, 'Request Message'), _react2.default.createElement('th', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 661
        }
      }, 'Sender'), _react2.default.createElement('th', { align: 'right', __source: {
          fileName: _jsxFileName,
          lineNumber: 662
        }
      }, 'Accept/Reject')))))));
    }
  }]);

  return CampaignIndex;
}(_react.Component);

exports.default = CampaignIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiZmFjdG9yeSIsIkNhcmQiLCJCdXR0b24iLCJ3ZWIzIiwiTGF5b3V0IiwiQ2FtcGFpZ25JbmRleCIsInN0YXRlIiwibXNnIiwiYWNjb3VudCIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIm1ldGhvZHMiLCJtYWtlUmVxdWVzdCIsInNlbmQiLCJmcm9tIiwib3V0IiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsInNldFN0YXRlIiwiYWNjIiwiZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJkMSIsInAiLCJ2IiwiYXIiLCJhbyIsInN0eWxlIiwiZGlzcGxheSIsInJlcXVlc3RzX2xlbmd0aCIsImNhbGwiLCJsZW4iLCJ0IiwiaSIsInJlcXVlc3RzIiwicmVxIiwicm93IiwiaW5zZXJ0Um93IiwiY2VsbDEiLCJpbnNlcnRDZWxsIiwiY2VsbDIiLCJjZWxsMyIsImNlbGw0IiwiY2VsbDUiLCJpbm5lckhUTUwiLCJkZXNjcmlwdGlvbiIsInN0YXR1cyIsImNvbXBsZXRlIiwidDEiLCJ0MiIsInZjQWNjZXB0IiwiY2hlY2siLCJzZW5kZXIiLCJpcCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJhcHBlbmRDaGlsZCIsInNlbmRDaGVjayIsIm9uY2xpY2siLCJ2YWwiLCJ2YWx1ZSIsInZhbDEiLCJwYXJzZUludCIsImlkIiwidmMiLCJjZWxsNiIsIm5vIiwiY29uc29sZSIsImxvZyIsInJlamVjdFBTIiwieWVzIiwiYWNjZXB0UFMiLCJ2MSIsInYyIiwiYmlsbCIsImFjIiwicmMiLCJhY2NlcHRDaGVjayIsInJlamVjdENoZWNrIiwiQVIiLCJzaG93QVIiLCJzaG93QU8iLCJBTyIsImNlbGw3IiwiQU9vcmFuZ2UiLCJBUm9yYW5nZSIsIkFPYWNjZXB0IiwiQVJhY2NlcHQiLCJhckFjY2VwdCIsImFvQWNjZXB0IiwiYWNjZXB0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Q0EsQUFDQSwrQkFBQSxjQUFBLFNBQUssV0FBTCxBQUFlO29CQUFmO3NCQUFBLEFBQ0s7QUFETDt5QkFDSyxjQUFBLFNBQUssV0FBTCxBQUFlO29CQUFmO3NCQUFBO0FBQUE7U0FETCxBQUNLLEFBQ0Usb0NBQUEsY0FBQSxXQUFPLFdBQVAsQUFBaUIsWUFBVyxJQUE1QixBQUErQjtvQkFBL0I7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0E7QUFEQTtBQUFBLHlCQUNBLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURBLEFBQ0EsQUFDQSx5QkFBQSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FGQSxBQUVBLEFBQ0Esb0NBQUEsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBSEEsQUFHQSxBQUNBLDJCQUFBLGNBQUEsUUFBSSxPQUFKLEFBQVU7b0JBQVY7c0JBQUE7QUFBQTtTQWhKaEIsQUFzSUssQUFFQSxBQUVPLEFBQ0UsQUFDRSxBQUlBLEFBVVosdUNBQUEsY0FBQSxTQUFLLElBQUwsQUFBUSxNQUFLLE9BQU8sRUFBQyxTQUFyQixBQUFvQixBQUFTO29CQUE3QjtzQkFBQSxBQUNDO0FBREQ7eUJBQ0MsY0FBQSxTQUFLLFdBQUwsQUFBZTtvQkFBZjtzQkFBQTtBQUFBO1NBREQsQUFDQyxBQUNBLCtCQUFBLGNBQUEsU0FBSyxXQUFMLEFBQWU7b0JBQWY7c0JBQUEsQUFDSztBQURMO3lCQUNLLGNBQUEsU0FBSyxXQUFMLEFBQWU7b0JBQWY7c0JBQUE7QUFBQTtTQURMLEFBQ0ssQUFDRSxvQ0FBQSxjQUFBLFdBQU8sV0FBUCxBQUFpQixZQUFXLElBQTVCLEFBQStCO29CQUEvQjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDQTtBQURBO0FBQUEseUJBQ0EsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREEsQUFDQSxBQUNBLHlCQUFBLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUZBLEFBRUEsQUFDQSxvQ0FBQSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FIQSxBQUdBLEFBQ0EsMkJBQUEsY0FBQSxRQUFJLE9BQUosQUFBVTtvQkFBVjtzQkFBQTtBQUFBO1NBcktoQixBQUNBLEFBMEpJLEFBRUMsQUFFTyxBQUNFLEFBQ0UsQUFJQSxBQVlqQjs7Ozs7QUE1cEJ5QixBLEFBOHBCNUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvcmFtbmF5YWsvUGljdHVyZXMvSE9EL2tpY2tzdGFydGVyIn0=